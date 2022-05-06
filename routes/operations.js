const { Router } = require('express');
const router = Router();
const operationController = require('../controllers/operations.js');
const operationMiddleware = require('../middlewares/operations');
const paginationMiddleware = require('../middlewares/pagination');

//'/' get all operations

router.get('/', paginationMiddleware('operations'), operationController.getAll);

//Get count
router.get('/count', operationController.getCount);

router.get('/count-expenses', operationController.getExpensesCount);
//Get operations by id, concept or type
router.get(
  '/:param',
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

router.delete(
  '/:id',
  operationMiddleware.deleteValidation,
  operationController.delete
);

module.exports = router;
