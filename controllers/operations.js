const operations = require('../middlewares/operations.js');
const operationService = require('../services/operations.js');

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const response = await operationService.getAll(req.limit, req.offset);
      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  getCount: async (req, res, next) => {
    try {
      const response = await operationService.getCount();
      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  getCountByParam: async (req, res, next) => {
    try {
      const response = await operationService.getCountByParam(req.params.param);
      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  getByParam: async (req, res, next) => {
    try {
      const response = await operationService.getByParam(
        req.params.param,
        req.limit,
        req.offset
      );
      res.json(response);
    } catch (error) {
      next(error);
    }
  },

  create: async (req, res, next) => {
    try {
      const response = await operationService.create(req.body);
      res.send('Creado correctamente');
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const response = await operationService.update(req.params.id, req.body);
      res.send('Actualizado correctamente');
    } catch (error) {
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const response = await operationService.delete(req.params.id);
      res.send('Eliminado correctamente');
    } catch (error) {
      next(error);
    }
  },
};
