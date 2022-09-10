import pandas
import json
import xml.etree.ElementTree as ET
import yaml

#parse csv
def parseCSV(filename = 'movie'):
  try:
    csv = pandas.read_csv('../' + filename + '.csv').to_json(orient="split")
  except:
    return "{\"error\":\"cannot find file\"}"
  return csv

#parse json
def parseJSON(filename = 'movie'):
  try:
    with open('../' + filename + '.json', 'r') as f:
      data = json.load(f)
  except:
    return {"error": "cannot find file"}
  return data

#parse xml
def parseXML(filename = 'movie'):
  try:
    root = ET.parse('../' + filename + '.xml').getroot()
  except:
    return {"error": "cannot find file"}
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
def parseYAML(filename = 'movie'):
  try:
    with open('../' + filename + '.yml', "r") as stream:
        try:
            return(yaml.safe_load(stream))
        except yaml.YAMLError as exc:
            return(exc)
  except:
    return {"error": "cannot find file"}