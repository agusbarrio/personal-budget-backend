const db = require('../../db/index.js');
const operationController = {};

const validate = require('../helpers/validations');

//Controller functions
operationController.getOperations = async (req, res, next) => {
  let page = validate.pageAtURL(req.query);
  if (!page) {
    res.json(await db.Operation.findAll());
  } else {
    res.json(await db.Operation.findAll(page));
  }
};

operationController.createOperation = async (req, res, next) => {
  if (validate.create(req.body)) {
    await db.Operation.create(req.body);
    res.send('Operacion realizada con exito');
  } else {
    res.status(400).send('Los datos ingresados no son válidos');
  }
};

operationController.updateOperation = async (req, res, next) => {
  if (validate.positiveInteger(req.params.id) && validate.update(req.body)) {
    await db.Operation.update(req.body, { where: { id: req.params.id } });
    res.send('Actualizacion realizada con exito');
  } else {
    res.status(400).send('La ruta o los datos ingresados son incorrectos');
  }
};

operationController.getOperationByParam = async (req, res, next) => {
  let param = req.params.param;
  let page = validate.pageAtURL(req.query);
  if (validate.positiveInteger(param)) {
    res.json(await db.Operation.findAll({ where: { id: param } }));
  }

  if (validate.concept(param)) {
    if (!page) {
      res.json(await db.Operation.findAll({ where: { concept: param } }));
    } else {
      res.json(
        await db.Operation.findAll({
          where: { concept: param },
          ...page,
        })
      );
    }
  }

  if (validate.type(param)) {
    if (!page) {
      res.json(await db.Operation.findAll({ where: { _type: param } }));
    } else {
      res.json(
        await db.Operation.findAll({
          where: { _type: param },
          ...page,
        })
      );
    }
  }

  if (
    !validate.positiveInteger(param) &&
    !validate.concept(param) &&
    !validate.type(param)
  )
    next();
};

operationController.error404 = (req, res) => {
  res.status(404).send('Ruta no encontrada');
};
module.exports = operationController;
