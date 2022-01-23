const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ejs = require('ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/home', (req,res) => {
    res.render('home');
})

app.get('/add', (req,res) => {
    res.render();
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})