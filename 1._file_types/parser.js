import fs from 'fs';
import { parse } from 'csv-parse';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//parse csv
const parser = parse({delimiter: ','}, function(err, data){
  console.log("CSV\n",data);
});
fs.createReadStream(__dirname+'/movie.csv').pipe(parser);
