const express = require('express');
const { nanoid } = require('nanoid');

const Urls = require('./url.model.js');

const router = express.Router();

router.post('/', async (req, res, next) => {
  const {
    url
  } = req.body;
  try {
    const getToUrl = await Urls.query().where({ url }).first();
    res.json({
      url: getToUrl.toUrl
    });
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  const {
    url,
    deleteVisit,
    expires
  } = req.body;
  try {
    const urlOutput = nanoid(16);
    await Urls.query().insert({
      url: urlOutput,
      toUrl: url,
      deleteAfterVisit: deleteVisit,
      expiresOn: expires
    });
    res.json({
      url: `https://urlshortenermk.herokuapp.com/${urlOutput}`
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
