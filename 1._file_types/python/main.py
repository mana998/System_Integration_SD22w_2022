from libs import Parser
from fastapi import FastAPI
import json
from pydantic import BaseModel


class File(BaseModel):
    filename: str

app = FastAPI()

@app.post("/parseCSV")
def _(file: File):
    return (json.loads(Parser.parseCSV(file.filename)))

@app.post("/parseJSON")
def _(file: File):
    return (Parser.parseJSON(file.filename))

@app.post("/parseXML")
def _(file: File):
    return (Parser.parseXML(file.filename))

@app.post("/parseYAML")
def _(file: File):
    return (Parser.parseYAML(file.filename))