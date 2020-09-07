const express = require('express');

const url = require('./url/url.router');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/url', url);

module.exports = router;
