const express = require('express');
const { nanoid } = require('nanoid');

const Urls = require('./url.model');

const router = express.Router();

router.get('/:url', async (req, res, next) => {
  const { url } = req.params;
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
    const urlOutput = nanoid(8);
    await Urls.query().insert({
      url: urlOutput,
      toUrl: url,
      deleteAfterVisit: deleteVisit,
      expiresOn: expires
    });
    res.json({
      url: `https://ushorty.ml/${urlOutput}`
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
