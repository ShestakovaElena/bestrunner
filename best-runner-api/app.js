require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const path = require('path');
const { PORT = 8080 } = process.env;
const router = require('./routes/index');

const corsOptions = {
  origin: ['http://localhost:3000', 'https://localhost:3000', 'https://shestakovaelena.github.io', 'http://shestakovaelena.github.io'],
  optionsSuccessStatus: 200,
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/data', router);
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
