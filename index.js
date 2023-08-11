import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

const writings = [];

app.get('/', (req, res) => {
    res.render('index.ejs', { list: writings });
})

app.get('/write', (req, res) => {
    res.render('write.ejs');
})

app.post('/submit', (req, res) =>{
    const data = req.body.entry;
    writings.push(data);
    res.redirect('/');
})

app.post('/', (req, res) => {
    const entry = req.body.entry;
    if (entry.trim() !== '') {
        writings.push(entry);
    }
    res.redirect('/');
})

app.listen(port, () =>{
    console.log(`App started on http://localhost:${port}`);
})