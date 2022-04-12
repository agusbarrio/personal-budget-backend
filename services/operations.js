const operationsRepository = require('../repositories/operations.js');
const objSchema = require('../helpers/validations');

operationService = {
  config: {
    pageSize: 10,
    concepts: [
      'entertainment',
      'supermarket',
      'clothing',
      'services',
      'travels',
      'others',
      'transport',
      'technology',
      'subscriptions',
      'home',
      'job',
    ],
    types: ['expense', 'income'],
    updateFields: ['concept', 'amount'],
    createFields: ['concept', 'amount', '_type'],
  },

  getAll: async (limit, offset) => {
    let response = await operationsRepository.getAll(limit, offset);
    return response;
  },

  getCount: async (options) => {
    let count = await operationsRepository.getCount(options);
    return count;
  },

  validId: (value) => {
    let n = Number(value);
    if (Number.isInteger(n) && n > 0) {
      return true;
    } else {
      return false;
    }
  },

  validConcept: (value) => {
    if (operationService.config.concepts.includes(value)) {
      return true;
    } else {
      return false;
    }
  },

  validType: (value) => {
    return operationService.config.types.includes(value) ? true : false;
  },

  validAmount: (value) => {
    let n = Number(value);
    if (!Number.isNaN(n) && n >= 0) {
      return true;
    } else {
      return false;
    }
  },

  getByParam: async (param, limit, offset) => {
    if (operationService.validId(param)) {
      let response = await operationsRepository.getById(param);
      return response;
    }
    if (operationService.validConcept(param)) {
      let response = await operationsRepository.getByConcept(
        param,
        limit,
        offset
      );
      return response;
    }
    if (operationService.validType(param)) {
      let response = await operationsRepository.getByType(param, limit, offset);
      return response;
    }

    const error = new Error('Not found');
    error.status = 404;
    throw error;
  },

  create: async (data) => {
    let response = await operationsRepository.create(data);
    return response;
  },

  update: async (id, data) => {
    let response = await operationsRepository.update(id, data);
    return response;
  },
};

module.exports = operationService;
