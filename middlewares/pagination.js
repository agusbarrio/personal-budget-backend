//entityName must be plural and lowercase. example: "operations", "users"

const operation = require('../models/operation');

module.exports = (entityName) => {
  const operationService = require(`../services/${entityName}`);

  const middleware = async (req, res, next) => {
    if (req.query.page === undefined) {
      next();
    } else {
      let page = Number(req.query.page);

      let maxCount;
      if (!req.params.param) {
        maxCount = await operationService.getCount();
      } else {
        if (operationService.validId(req.params.param)) {
          return next();
        }
        if (operationService.validType(req.params.param))
          maxCount = await operationService.getTypeCount(req.params.param);
        if (operationService.validConcept(req.params.param))
          maxCount = await operationService.getConceptCount(req.params.param);
      }

      let lastPage = Math.ceil(maxCount / operationService.config.pageSize);

      try {
        if (!Number.isInteger(page)) {
          const error = new Error('parameter "page" must be an integer number');
          error.status = 400;
          throw error;
        }

        if (page < 1 || page > lastPage) {
          const error = new Error('parameter "page" out of range');
          error.status = 400;
          throw error;
        }
        req.limit = operationService.config.pageSize;
        req.offset = (page - 1) * operationService.config.pageSize;
        next();
      } catch (error) {
        next(error);
      }
    }
  };

  return middleware;
};
