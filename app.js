const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is my first ci/cd pipeline and now testing my ci/cd'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
