# PNP-Extrator

PNP-Extrator é uma ferramenta automatizada para extração de arquivos .csv da [Plataforma Nilo Peçanha](http://plataformanilopecanha.mec.gov.br/) utilizando o **Puppeteer**, framework para controle de navegadores web via JavaScript.

## Requisitos

### 1. Node.js

Para rodar o PNP-Extrator, é necessário ter o [Node.js](https://nodejs.org/pt) instalado em sua máquina. 

### 2. Instalação das Dependências

Instale as dependências necessárias executando os seguintes comandos no terminal:

```bash
npm install puppeteer
npm install @puppeteer/replay
```

## Execução

Para executar o script de extração, use o comando abaixo:

```bash
node get_PNP_Extrator.js
```
# PNP Microdados Matrículas
A PNP Microdados é uma base de microdados por matrícula, possibilitando análises mais precisas e a correlação de mais informações.

## Requisitos
A aplicação roda em Python, utilizando os seguintes pacotes:

### Instalação das Dependências

**BeautifulSoup4**
```bash
pip install beautifulsoup4
```

**Requests**
```bash
pip install requests
```

### Executar
Para fazer a extração, utilize o comando:

```bash
python .\get_PDA_PNP_Matriculas.py
```

## Contribuição

Sinta-se à vontade para contribuir com este projeto. 
Se encontrar algum problema ou tiver sugestões de melhorias, abra uma *issue* ou envie um *pull request*.

---

Desenvolvido por **Jairo Almeida**  
[github.com/jairoalmeid](https://github.com/jairoalmeid)

---