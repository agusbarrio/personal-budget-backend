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
    updateFields: ['concept', 'amount', '_date'],
    createFields: ['concept', 'amount', '_type', '_date'],
  },

  getAll: async (limit, offset) => {
    let response = await operationsRepository.getAll(limit, offset);
    return response;
  },

  getCount: async () => {
    let count = await operationsRepository.getCount();
    return count;
  },

  getTypeCount: async (_type) => {
    let count = await operationsRepository.getTypeCount(_type);
    return count;
  },

  getConceptCount: async (concept) => {
    let count = await operationsRepository.getConceptCount(concept);
    return count;
  },

  getCountByParam: async (param) => {
    if (operationService.validConcept(param)) {
      let count = await operationsRepository.getConceptCount(param);
      return count;
    }
    if (operationService.validType(param)) {
      let count = await operationsRepository.getTypeCount(param);
      return count;
    }
    const error = new Error('Not Found');
    error.status = 404;
    throw error;
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
    if (!Number.isNaN(n) && n > 0) {
      return true;
    } else {
      return false;
    }
  },

  validDate: (value) => {
    const regExpDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

    return regExpDate.test(value) && Date.parse(value) <= Date.now()
      ? true
      : false;
  },
  getByParam: async (param, limit, offset) => {
    const error = new Error('Not found');
    error.status = 404;

    if (operationService.validId(param)) {
      let response = await operationsRepository.getById(param);
      if (response) return response;
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

  delete: async (id) => {
    const response = await operationsRepository.delete(id);
    return response;
  },
};

module.exports = operationService;
