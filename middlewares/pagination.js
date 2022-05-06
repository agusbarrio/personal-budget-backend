//entityName must be plural and lowercase. example: "operations", "users"
module.exports = (entityName) => {
  const {
    getCount,
    getExpensesCount,
    getIncomesCount,
    config,
  } = require(`../services/${entityName}`);

  const middleware = async (req, res, next) => {
    if (req.query.page === undefined) {
      next();
    } else {
      let page = Number(req.query.page);
      console.log(req.params.param);
      let maxCount;
      if (!req.params.param) maxCount = await getCount();
      if (req.params.param === 'expense') maxCount = await getExpensesCount();
      if (req.params.param === 'income') maxCount = await getIncomesCount();

      let lastPage = Math.ceil(maxCount / config.pageSize);

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
        req.limit = config.pageSize;
        req.offset = (page - 1) * config.pageSize;
        next();
      } catch (error) {
        next(error);
      }
    }
  };

  return middleware;
};
