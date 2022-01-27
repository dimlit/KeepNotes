const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/home', (req,res) => {
    res.render('home');
})

app.get('/note', (req,res) => {
    res.render('index');
})

app.get('/note/new', (req,res) => {
    res.render('new');
})

app.post('/note', (req,res) => {
    console.log(req.body); 
    res.redirect('/note');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})