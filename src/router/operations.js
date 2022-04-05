const { Router } = require('express');
const {
  getOperationsByConcept,
} = require('../controllers/operation-controller.js');
const router = Router();
const operationController = require('../controllers/operation-controller.js');

/* 
'/' get all operations
'/?page=number' with number >= 0. Get 10 operations per page
*/
router.get('/', operationController.getOperations);

//Create new operation
router.post('/', operationController.createOperation);

//Get operations by id, concept or type
router.get('/:param', operationController.getOperationByParam);

//Update one operation
router.put('/:id', operationController.updateOperation);

router.use(operationController.error404);

module.exports = router;
