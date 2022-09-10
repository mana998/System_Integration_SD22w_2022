from fastapi import FastAPI, Request

app = FastAPI()

@app.get("/")
def _():
    return {"Hey":"There"}

@app.post("/webhook")
async def _(request: Request):
    data = await request.json()
    print(data)
    return data

