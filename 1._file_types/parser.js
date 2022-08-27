import fs from 'fs';
import { parse } from 'csv-parse';
import jsonfile from 'jsonfile';
import convert from 'xml-js';
import { loadYamlFile } from 'load-yaml-file'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//parse csv
const parser = parse({delimiter: ','}, function(err, data){
  console.log("CSV\n",data);
});
fs.createReadStream(__dirname+'/movie.csv').pipe(parser);

//parse json
const file = `${__dirname}/movie.json`;
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  console.log("JSON", obj)
})

//parse xml
const xml = fs.readFileSync(__dirname+'/movie.xml', 'utf8');
const options = {compact: false};
const result = convert.xml2js(xml, options);
console.log("XML");
console.dir(result, { depth: null });

//parse yaml
const data = await loadYamlFile(__dirname+'/movie.yml');
console.log("YAML", data);

//parse txt
const txt = fs.readFileSync(__dirname+'/movie', 'utf8').split("\r\n");
const text = {};
for (let i = 0; i < txt.length; i+=2) {
    if (txt[i+1].match(/\//)) txt[i+1] = txt[i+1].split('/');
    text[txt[i]] = txt[i+1]; 
}
console.log(text);