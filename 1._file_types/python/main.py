from libs import Parser
from fastapi import FastAPI
import json

app = FastAPI()

@app.get("/parseCSV")
def _():
    return (json.loads(Parser.parseCSV()))

@app.get("/parseJSON")
def _():
    return (Parser.parseJSON())

@app.get("/parseXML")
def _():
    return (Parser.parseXML())

@app.get("/parseYAML")
def _():
    return (Parser.parseYAML())