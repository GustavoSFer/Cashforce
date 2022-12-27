const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na posta ${PORT}`);
});

module.exports = app;
