const {
    config,
    validId,
    validConcept,
    validType,
    validAmount,
    validDate,
  } = require('../services/operations'),
  objSchema = require('../helpers/validations');

module.exports = {
  createValidation: async (req, res, next) => {
    if (
      !(
        objSchema(req.body, config.createFields) &&
        validConcept(req.body.concept) &&
        validAmount(req.body.amount) &&
        validType(req.body._type) &&
        validDate(req.body._date)
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
        validAmount(req.body.amount) &&
        validDate(req.body._date)
      )
    ) {
      const error = new Error('Bad request');
      error.status = 400;
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
