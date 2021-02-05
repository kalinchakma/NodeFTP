const express = require('express');
const serveIndex = require('serve-index');
const compresion = require('compression');

const app = express();

app.use(compresion());
app.use(
    "/ftp",
    express.static('public'),
    serveIndex('public', {icons: true})
);

app.listen(3000, () => console.log("port listening 3000"));