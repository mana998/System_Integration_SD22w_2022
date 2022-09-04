import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.resolve('./public')));

app.get("/timestamp", (req, res) => {
    res.send({"timestamp": new Date().toISOString()});
})

app.get("/pythontimestamp", async (req, res) => {
    const pythonResponse = await fetch("http://127.0.0.1:8000/timestamp")
    const pythonMessage = await pythonResponse.json();
    //parse into UTC datetime
    res.send({"pythonTimestamp": new Date(pythonMessage['timestamp'])});
})

app.listen(3000, (error) => {
    console.log("Server is running on", 3000);
})