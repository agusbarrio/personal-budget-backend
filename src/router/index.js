const { Router } = require('express');
const router = Router();
const operationController = require('../controllers/operation-controller.js');

router.get('/', (req, res) => {
  res.send('Pagina principal');
});
module.exports = router;
