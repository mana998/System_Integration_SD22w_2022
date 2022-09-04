import fs from 'fs';
import { parse } from 'csv-parse';
import jsonfile from 'jsonfile';
import convert from 'xml-js';
import { loadYamlFile } from 'load-yaml-file'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

function parseCSV() { 
    const csv = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(__dirname+'/movie.csv')
        .on("error", error => {
            reject(error);
        })    
        .pipe(parse({delimiter: ','}))
            .on("data", function (row) {
                csv.push(row);
            })
            .on("end", function() {
                resolve(csv);
            })
    })
}

//parse json
function parseJSON() {
    const file = `${__dirname}/movie.json`;
    return new Promise((resolve, reject) => {
        jsonfile.readFile(file, function (err, obj) {
            if (err) reject(error);
            resolve(obj);
        })
    })
}

//parse xml
function parseXML() {
    const xml = fs.readFileSync(__dirname+'/movie.xml', 'utf8');
    const options = {compact: false};
    const result = convert.xml2js(xml, options);
    return result;
    //console.dir(result, { depth: null });
}

//parse yaml
async function parseYAML() {
    const data = await loadYamlFile(__dirname+'/movie.yml');
    return (data);
}

//parse txt
function parseTXT() {
    const txt = fs.readFileSync(__dirname+'/movie', 'utf8').split("\r\n");
    const text = {};
    for (let i = 0; i < txt.length; i+=2) {
        if (txt[i+1].match(/\//)) txt[i+1] = txt[i+1].split('/');
        text[txt[i]] = txt[i+1]; 
    }
    return text;
}

export {parseCSV, parseJSON, parseTXT, parseXML, parseYAML}