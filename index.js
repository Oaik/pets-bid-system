const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api/swagger.json');

const app = new express();
app.use(express.json());

/* set up swagger in the root */
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port ${process.env.PORT}`);
})
