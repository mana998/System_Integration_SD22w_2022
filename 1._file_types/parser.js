import fs from 'fs';
import { parse } from 'csv-parse';
import jsonfile from 'jsonfile';
import convert from 'xml-js';
import { loadYamlFile } from 'load-yaml-file'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

function parseCSV(filename = 'movie') { 
    const csv = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(__dirname+'/'+filename+'.csv')
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
function parseJSON(filename = 'movie') {
    const file = `${__dirname}/${filename}.json`;
    return new Promise((resolve, reject) => {
        jsonfile.readFile(file, function (err, obj) {;
            if (err) reject(err);
            resolve(obj);
        })
    })
}

//parse xml
function parseXML(filename = 'movie') {
    let xml;
    try {
        xml = fs.readFileSync(__dirname+'/'+filename+'.xml', 'utf8')
    } catch (error) {
        return({"err" : error});
    };
    const options = {compact: false};
    const result = convert.xml2js(xml, options)
    return result;
    //console.dir(result, { depth: null });
}

//parse yaml
async function parseYAML(filename = 'movie') {
    let data;
    try {
        data = await loadYamlFile(__dirname+'/'+filename+'.yml');
    } catch (error) {
        return({"err" : error});
    };
    return (data);
}

//parse txt
function parseTXT(filename = 'movie') {
    let txt;
    try {
        txt = fs.readFileSync(__dirname+'/'+filename, 'utf8').split("\r\n");
    } catch (error) {
        return({"err" : error});
    };
    const text = {};
    for (let i = 0; i < txt.length; i+=2) {
        if (txt[i+1].match(/\//)) txt[i+1] = txt[i+1].split('/');
        text[txt[i]] = txt[i+1]; 
    }
    return text;
}

export {parseCSV, parseJSON, parseTXT, parseXML, parseYAML}