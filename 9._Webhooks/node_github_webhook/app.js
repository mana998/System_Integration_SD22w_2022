import express from "express"
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send({message: "Access from reverse proxy"})
})

app.post('/github', (req, res) => {
    console.log(req.body);
    res.send();
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error) console.log(error)
    else console.log("Server is running on", PORT);
});