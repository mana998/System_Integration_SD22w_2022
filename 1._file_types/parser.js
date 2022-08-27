import fs from 'fs';
import { parse } from 'csv-parse';
import jsonfile from 'jsonfile';

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
