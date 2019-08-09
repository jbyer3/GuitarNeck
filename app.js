const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, "src")));

app.get('/', (req, res) => res.send('/public/index.html'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));