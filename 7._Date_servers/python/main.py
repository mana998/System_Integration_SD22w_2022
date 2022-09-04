from fastapi import FastAPI
import requests
import datetime

app = FastAPI()
@app.get("/nodetimestamp")
def _():
    response = requests.get("http://localhost:3000/timestamp")
    #strip last Z to parse to UTC datetime
    return {'nodeTimestamp': datetime.datetime.fromisoformat(response.json()['timestamp'][:-1])}

@app.get("/timestamp")
def _():
    return {"timestamp": datetime.datetime.utcnow().isoformat()+"Z"} #add military timezone suffix

