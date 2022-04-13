const {
    config,
    validId,
    validConcept,
    validType,
    validAmount,
  } = require('../services/operations'),
  objSchema = require('../helpers/validations');

module.exports = {
  /* getByParamValidation: async (req, res, next) => {
    let param = req.params.param;
    if (validId(param)) {
      req.options = { where: { id: param } };
      return next();
    }
    if (validConcept(param)) {
      req.options = { where: { concept: param } };
      return next();
    }
    if (validType(param)) {
      req.options = { where: { _type: param } };
      return next();
    }
  }, */

  createValidation: async (req, res, next) => {
    if (
      !(
        objSchema(req.body, config.createFields) &&
        validConcept(req.body.concept) &&
        validAmount(req.body.amount) &&
        validType(req.body._type)
      )
    ) {
      const error = new Error('Bad Request');
      error.status = 400;
      next(error);
    } else {
      next();
    }
  },

  updateValidation: async (req, res, next) => {
    let param = req.params.id;
    if (!(await validId(param))) {
      const error = new Error('Not found');
      error.status = 404;
      next(error);
    }

    if (
      !(
        objSchema(req.body, config.updateFields) &&
        validConcept(req.body.concept) &&
        validAmount(req.body.amount)
      )
    ) {
      const error = new Error('Not Found');
      error.status = 404;
      next(error);
    } else {
      next();
    }
  },

  deleteValidation: async (req, res, next) => {
    let param = req.params.id;
    if (!(await validId(param))) {
      const error = new Error('Not found');
      error.status = 404;
      next(error);
    } else {
      next();
    }
  },
};
