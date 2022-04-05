const validate = {
  config: {
    operationsPerPage: 10,
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

  objSchema: (obj, keysArray) => {
    keysArray.forEach((property) => {
      if (!obj.hasOwnProperty(property)) return false;
    });
    for (const key in obj) {
      if (!keysArray.includes(key)) return false;
    }
    return true;
  },

  positiveInteger: (value) => {
    let n = Number(value);
    if (!Number.isNaN(n) && Number.isInteger(n) && n >= 0) {
      return true;
    } else {
      return false;
    }
  },

  concept: (value) => {
    if (validate.config.concepts.includes(value)) {
      return true;
    } else {
      return false;
    }
  },

  type: (value) => {
    return validate.config.types.includes(value) ? true : false;
  },

  amount: (value) => {
    let n = Number(value);
    if (!Number.isNaN(n) && n >= 0) {
      return true;
    } else {
      return false;
    }
  },

  update: (operation) => {
    if (
      validate.objSchema(operation, validate.config.updateFields) &&
      validate.concept(operation.concept) &&
      validate.amount(operation.amount)
    ) {
      return true;
    } else {
      return false;
    }
  },

  create: (operation) => {
    if (
      validate.objSchema(operation, validate.config.createFields) &&
      validate.concept(operation.concept) &&
      validate.amount(operation.amount) &&
      validate.type(operation._type)
    ) {
      return true;
    } else {
      return false;
    }
  },

  pageAtURL: (query) => {
    if (Object.keys(query).length === 0) {
      return false;
    }
    if (query.hasOwnProperty('page') && validate.positiveInteger(query.page)) {
      return {
        offset: query.page * validate.config.operationsPerPage,
        limit: validate.config.operationsPerPage,
      };
    }
  },
};

module.exports = validate;
/* 
const objSchema = (obj, keysArray) => {
  keysArray.forEach((property) => {
    if (!obj.hasOwnProperty(property)) return false;
  });
  for (const key in obj) {
    if (!keysArray.includes(key)) return false;
  }
  return true;
};

const positiveInteger = (value) => {
  let n = Number(value);
  if (!Number.isNaN(n) && Number.isInteger(n) && n >= 0) {
    return true;
  } else {
    return false;
  }
};

const concept = (value) => {
  if (config.concepts.includes(value)) {
    return true;
  } else {
    return false;
  }
};

const type = (value) => {
  return config.types.includes(value) ? true : false;
};

const amount = (value) => {
  let n = Number(value);
  if (!Number.isNaN(n) && n >= 0) {
    return true;
  } else {
    return false;
  }
};

const update = (operation) => {
  if (
    objSchema(operation, config.updateFields) &&
    concept(operation.concept) &&
    amount(operation.amount)
  ) {
    return true;
  } else {
    return false;
  }
};

const create = (operation) => {
  if (
    objSchema(operation, config.createFields) &&
    concept(operation.concept) &&
    amount(operation.amount) &&
    type(operation._type)
  ) {
    return true;
  } else {
    return false;
  }
};

const pageAtURL = (query) => {
  if (Object.keys(query).length === 0) {
    return false;
  }
  if (query.hasOwnProperty('page') && positiveInteger(query.page)) {
    return {
      offset: query.page * config.operationsPerPage,
      limit: config.operationsPerPage,
    };
  }
};
 */
