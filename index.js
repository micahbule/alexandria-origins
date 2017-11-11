import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';
import serveStatic from 'serve-static';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname);

app.use(morgan('dev'));
app.use(serveStatic(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('src/index', (err, html) => {
        if (err) throw err;
        res.send(html.replace('content', renderToString(<App />)));
    });
});

var people = [];

app.get('/api/people', (req, res) => {
    res.send(people);
});

app.post('/api/people', (req, res) => {
    people.push({
        id: people.length + 1,
        name: req.body.name,
        age: req.body.age
    });

    res.send(people);
});

app.listen(3000, () => {
    winston.info('Server is up');
});