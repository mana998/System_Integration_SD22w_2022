import pandas
import json

#parse csv
csv = pandas.read_csv('./movie.csv')
print('csv\n', csv)

#parse json
with open('./movie.json', 'r') as f:
  data = json.load(f)
print('json\n', data)
