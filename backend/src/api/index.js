import { Router } from 'express';

import url from './url/url.router';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/url', url);

export default router;
