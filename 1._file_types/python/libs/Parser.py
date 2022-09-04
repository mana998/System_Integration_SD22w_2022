import pandas
import json
import xml.etree.ElementTree as ET
import yaml

#parse csv
def parseCSV():
  return pandas.read_csv('../movie.csv').to_json(orient="split")

#parse json
def parseJSON():
  with open('../movie.json', 'r') as f:
    data = json.load(f)
  return data

#parse xml
def parseXML():
  root = ET.parse('../movie.xml').getroot()
  xml = {}
  for element in root:
      if (element.text.startswith('\n')):
            children = []
            for child in root.find('.//'+element.tag):
                children.append(child.text)
            xml[element.tag] = children
      else:  
         xml[element.tag] = element.text
  return xml

#parse yaml
def parseYAML():
  with open("../movie.yml", "r") as stream:
      try:
          return(yaml.safe_load(stream))
      except yaml.YAMLError as exc:
          return(exc)