const { Router } = require('express');
const router = Router();
const operationController = require('../controllers/operations.js');
const operationMiddleware = require('../middlewares/operations');
const paginationMiddleware = require('../middlewares/pagination');

//'/' get all operations

router.get('/', paginationMiddleware('operations'), operationController.getAll);

//Get operations by id, concept or type
router.get(
  '/:param',
  /* operationMiddleware.paramValidation, */
  paginationMiddleware('operations'),
  operationController.getByParam
);

//Create new operation
router.post(
  '/',
  operationMiddleware.createValidation,
  operationController.create
);

//Update one operation
router.put(
  '/:id',
  operationMiddleware.updateValidation,
  operationController.update
);

module.exports = router;
