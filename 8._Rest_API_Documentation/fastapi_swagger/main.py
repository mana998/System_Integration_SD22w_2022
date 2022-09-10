from fastapi import FastAPI, Query
from pydantic import BaseModel
from typing import Union

app = FastAPI()

@app.get("/")
def _():
    return {"Hey":"There"}

@app.get("/items/{item_id}")
def _(item_id: int):
        return {"item_id": item_id}

@app.get("/items")
def _(page: int = Query(default=1, gt=0)):
        return {"page": page}

class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float
    tax: Union[float, None] = None


@app.post("/items")
def _(item: Item):
    return item