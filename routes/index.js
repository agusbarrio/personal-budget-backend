const { Router } = require('express');
const router = Router();
const operationController = require('../controllers/operations.js');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/api', (req, res) => {
  res.render('api');
});
module.exports = router;
