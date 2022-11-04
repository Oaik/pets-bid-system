const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const dbManager = require('./db.js');

const app = new express();
app.use(express.json());

dbManager.dbConnect();

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port ${process.env.PORT}`);
})
