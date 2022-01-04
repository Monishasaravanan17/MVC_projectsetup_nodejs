const express = require('express');
const app = express()
const mongoose = require('mongoose');
const { path } = require('nconf');
const router = require('express').Router();

app.use(express.json())
app.use("/", router);

const config = require("./config/config.json");



// -----database connection----
const database = require("./utilities/database")(mongoose);
// ----

app.listen(config.port, () => 
console.log('App is running'))
require('./route/route')( app, router, config);
