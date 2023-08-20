const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./src/router/router')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

const port = 3001;

app.listen(port, () => {
    console.log(`Порт сервера: ${port}`);
});
