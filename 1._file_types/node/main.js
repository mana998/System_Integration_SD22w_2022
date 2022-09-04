import express from 'express';
import {parseCSV, parseJSON, parseTXT, parseXML, parseYAML} from '../parser.js';

const app = express();

app.get("/parseCSV", async (req, res) => {
    const csv = await parseCSV();
    const csvParsed = [];
    for (let i = 1; i < csv.length; i++) {
        const object = {};
        for (let j = 0; j < csv[0].length; j++) {
            object[csv[0][j]] = csv[i][j];
        }
        csvParsed.push(object);
    }
    res.send({"csv": csvParsed});
})

app.get("/parseJSON", async (req, res) => {
    const json = await parseJSON();
    res.send({"json": json});
})

app.get("/parseXML", (req, res) => {
    const xml = parseXML();
    res.send({"xml": xml});
})

app.get("/parseYAML", async (req, res) => {
    const yaml = await parseYAML();
    res.send({"yaml": yaml});
})

app.get("/parseTXT", (req, res) => {
    const txt = parseTXT();
    res.send({"txt": txt});
})

app.listen(3000, (error) => {
    console.log("Server is running on", 3000);
})