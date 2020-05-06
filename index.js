/*
import db from "./server/config/db";
 import express from "express";
 import bodyParser from "body-parser";
import route from "./server/routes/index"; 
*/

const db = require("./server/config/db");
const express = require("express");
const bodyParser = require("body-parser");
const route = require("./server/routes/index");

const app = express();
 db.connectDb();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', route);






app.listen(5000,()=> { console.log('app started')});

module.exports = app;
// export default app