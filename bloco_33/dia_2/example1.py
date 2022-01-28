from abc import ABC, abstractmethod
from csv import DictWriter
import gzip
import json
from zipfile import ZipFile


class Compressor(ABC):
    def __init__(self, filepath="./"):
        self.filepath = filepath

    @abstractmethod
    def compress(self, file_name):
        raise NotImplementedError


class ZipCompressor():
    def compress(self, file_name):
        with ZipFile(file_name + '.zip', 'w') as zip_file:
            zip_file.write(file_name)


class GzCompressor():

    def compress(self, file_name):
        with open(file_name, 'rb') as content:
            with gzip.open(file_name + '.gz', 'wb') as gzip_file:
                gzip_file.writelines(content)


class SalesReport(ABC):
    def __init__(self, export_file, compressor=GzCompressor()):
        self.export_file = export_file
        self.compressor = compressor

    def build(self):
        return [{
                'Coluna 1': 'Dado 1',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    FILE_EXTENSION = ''

    def get_export_file_name(self):
        return self.export_file + self.FILE_EXTENSION

    def compress(self):
        self.serialize()
        self.compressor.compress(self.get_export_file_name())

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    @abstractmethod
    def get_length(self):
        raise not NotImplementedError


class SalesReportJSON(SalesReport):
    FILE_EXTENSION = '.json'

    def serialize(self):
        with open(self.export_file + '.json', 'w') as file:
            json.dump(self.build(), file)

    def get_length(self):
        return 4


class SalesReportCSV(SalesReport):
    FILE_EXTENSION = '.csv'

    def serialize(self):
        with open(self.export_file + '.csv', 'w') as file:
            headers = ["Coluna 1", "Coluna 2", "Coluna 3"]
            csv_writer = DictWriter(file, headers)
            csv_writer.writeheader()
            for item in self.build():
                csv_writer.writerow(item)

    def get_length(self):
        return 4


relatorio_de_vendas_json = SalesReportJSON('meu_relatorio_json')
relatorio_de_vendas_json.compress()

relatorio_de_vendas_csv = SalesReportCSV('meu_relatorio_csv')
relatorio_de_vendas_csv.compress()
