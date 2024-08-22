import requests
import json
import csv

def extract_data_from_odata_api(url, params=None):
    """Extrai dados de uma API OData."""

    response = requests.get(url, params=params)
    response.raise_for_status()

    data = json.loads(response.content)

    headers = list(data['value'][0].keys())
    rows = [list(item.values()) for item in data['value']]

    return headers, rows

def write_to_csv(headers, rows, filename='dados_tabela.csv'):

    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(headers)
        writer.writerows(rows)

if __name__ == '__main__':
    url = 'https://olinda.mec.gov.br/olinda-ide/servico/PDA_PNP/versao/v1/odata/PDA_PNP_Matriculas'
    params = {
        #'$top': 1000,  # Limitar o número de resultados (ajuste conforme necessário)
    }
    headers, rows = extract_data_from_odata_api(url, params)
    write_to_csv(headers, rows)

    print(f'Dados da tabela foram salvos em dados_tabela.csv')