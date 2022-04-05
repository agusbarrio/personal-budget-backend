const db = {
  database: 'personal-budget',
  username: 'root',
  password: 'carolita',
  options: {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      typeCast: function (field, next) {
        if (field.type == 'DATETIME' || field.type == 'TIMESTAMP') {
          return new Date(field.string() + 'Z');
        }
        return next();
      },
    },
    timezone: '-03:00',
  },
};

module.exports = db;
