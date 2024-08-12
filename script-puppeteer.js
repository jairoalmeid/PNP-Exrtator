
const puppeteer = require('puppeteer');
const path = require('path');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run(pagina) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const downloadPath = path.resolve(__dirname, 'bases_pnp');

    // Configura o diretório para salvar os arquivos csv
    await page._client().send('Page.setDownloadBehavior', {
        behavior: 'allow',
        downloadPath: downloadPath
    });

    // Configuração da página (tempo para carregar a página e configuração do tamanho)
    await page.setDefaultTimeout(60000);
    await page.setViewport({ width: 1146, height: 911 });

    try {
        await page.goto('https://moduloextratorpnp.mec.gov.br/pnpquery/'+pagina, { waitUntil: 'networkidle2' });
        console.log('Página carregada');
    } catch (error) {
        console.error('Erro ao carregar a página:', error);
        await browser.close();
        return;
    }

    // Verifica se o botão está visível e clica nele
    try {
        await page.waitForSelector('div:nth-of-type(2) > br-button', { timeout: 10000 });
        //console.log('Botão encontrado.');
        await page.click('div:nth-of-type(2) > br-button', { offset: { x: 32.275, y: 8.275 } });
        //console.log('Clique realizado.');
    } catch (error) {
        //console.error('Erro ao encontrar ou clicar no botão:', error);
        await browser.close();
        return;
    }

    // Espera adicional para garantir que o download ocorra
    console.log('Esperando o download...');
    await sleep(60000); // 60 segundos

    await browser.close();
    console.log('Navegador fechado. Arquivo deve estar em:', downloadPath);
}

// Verifica se o script está sendo executado diretamente pelo Node.js
if (require.main === module) {
    for (i = 1; i <= 20; i++) {
        run(i);
    }
}
