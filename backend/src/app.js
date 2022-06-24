const express = require('express');
const history = require('connect-history-api-fallback');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

require('dotenv').config();
require('./db');

const middlewares = require('./middlewares');
const api = require('./api').default;

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
const useStatic = express.static(path.join(__dirname, '../public/dist'));
app.use(useStatic);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(useStatic);

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public/dist') });
});

app.use('/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
