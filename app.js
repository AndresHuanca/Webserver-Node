//import
const express = require('express');
//importando hns partials
const hbs = require('hbs');
//Dotenv para variables de entorno
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//handlebars

hbs.registerPartials( __dirname + '/views/partials');


//hbs- busca autimaticamne te en view
app.set('view engine', 'hbs');


// sserir contenfi estatico ----------------------tiene prioridad al req----
app.use( express.static('prueba') );

//controlador con hbs
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Andres Huanca',
        titulo: 'Aprendiendo NodeJs'
    });

});

app.get('/generic', (req, res) => {

    res.render('generic', {
        nombre: 'Andres Huanca',
        titulo: 'Aprendiendo NodeJs'
    });

});

app.get('/elements', (req, res) => {

    res.render('elements', {
        nombre: 'Andres Huanca',
        titulo: 'Aprendiendo NodeJs'
    });

});



app.get('/generic', (req, res) => {

    res.sendFile(__dirname + '/prueba/generic.html');

});

app.get('/elements', (req, res) => {

    res.sendFile(__dirname + '/prueba/elements.html');

});

//cualquier otra bsuqueda 
app.get('*', (req, res) => {

    res.sendFile( __dirname + '/public/404.html');

});

app.listen( port);
console.log( port );
