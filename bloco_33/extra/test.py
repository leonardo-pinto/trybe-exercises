from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport
from inventory_report.importer.xml_importer import XmlImporter
from inventory_report.importer.csv_importer import CsvImporter
from inventory_report.importer.json_importer import JsonImporter
# import csv
# import json
# import xmltodict


class Inventory:
    @classmethod
    def import_data(cls, file_path, report_type):
        if file_path.endswith(".xml"):
                # xml_dat = xmltodict.parse(file.read())
                # https://stackoverflow.com/questions/20166749/how-to-convert-an-ordereddict-into-a-regular-dict-in-python3
                # como converter um OrderedDict em um dict
                # raw_file_content = json.loads(json.dumps(xml_dat))
                # file_content = raw_file_content["dataset"]["record"]
            file_content = XmlImporter.import_data(file_path)
        elif file_path.endswith(".csv"):
                # file_content = [
                #     product_data
                #     for product_data
                #     in csv.DictReader(file, delimiter=",", quotechar='"')
                # ]
            file_content = JsonImporter.import_data(file_path)
        elif file_path.endswith(".json"):
                # file_content = [
                #     product_data
                #     for product_data
                #     in json.load(file)
                # ]
            file_content = CsvImporter.import_data(file_path)
        if (report_type == 'simples'):
            return SimpleReport.generate(file_content)
        elif (report_type == 'completo'):
            return CompleteReport.generate(file_content)

path='/home/leonardo/Trybe/Projects/sd-011-inventory-report/inventory_report/data/inventory.csv'
print(Inventory.import_data(path, 'simples'))
