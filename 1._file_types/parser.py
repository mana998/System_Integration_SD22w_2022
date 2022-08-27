import pandas
import json
import xml.etree.ElementTree as ET
import yaml

#parse csv
csv = pandas.read_csv('./movie.csv')
print('csv\n', csv)

#parse json
with open('./movie.json', 'r') as f:
  data = json.load(f)
print('json\n', data)

#parse xml
root = ET.parse('./movie.xml').getroot()
print('xml\n')
for element in root:
     print(element.tag, element.text)

#parse yaml
print('yaml\n')
with open("./movie.yml", "r") as stream:
    try:
        print(yaml.safe_load(stream))
    except yaml.YAMLError as exc:
        print(exc)