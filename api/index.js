const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

consign().include('routes').include('utils').into(app);

const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);
server.listen(port);