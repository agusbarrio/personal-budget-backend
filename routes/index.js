const { Router } = require('express');
const router = Router();
const operationController = require('../controllers/operations.js');

router.get('/', (req, res) => {
  res.send('Pagina principal');
});
module.exports = router;
