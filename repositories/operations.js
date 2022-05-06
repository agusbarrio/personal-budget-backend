const db = require('../models/index');

module.exports = {
  getAll: async (limit, offset) => {
    let response = await db.Operation.findAll({ limit, offset });
    return response;
  },

  getCount: async () => {
    let response = await db.Operation.count();
    return response;
  },

  getExpensesCount: async () => {
    let response = await db.Operation.count({ where: { _type: 'expense' } });
    return response;
  },

  getIncomesCount: async () => {
    let response = await db.Operation.count({ where: { _type: 'income' } });
    return response;
  },

  getById: async (id) => {
    let response = await db.Operation.findByPk(id);
    return response;
  },

  getByConcept: async (concept, limit, offset) => {
    let response = await db.Operation.findAll({
      where: { concept },
      limit,
      offset,
    });
    return response;
  },

  getByType: async (_type, limit, offset) => {
    let response = await db.Operation.findAll({
      where: { _type },
      limit,
      offset,
    });
    return response;
  },

  update: async (id, data) => {
    let response = await db.Operation.update(data, { where: { id } });
    return response;
  },

  create: async (data) => {
    let response = await db.Operation.create(data);
    return response;
  },

  delete: async (id) => {
    let response = await db.Operation.destroy({ where: { id } });
    return response;
  },
};
