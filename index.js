const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const app = new express();
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port ${process.env.PORT}`);
})
