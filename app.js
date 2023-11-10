const express = require('express');
const userRouter=require

const body_parsar = require('body-parser');

const app =express();
app.use(body_parsar.json());
module.exports = app;