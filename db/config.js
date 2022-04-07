require('dotenv').config({
  path: `${__dirname}\\..\\.env`,
});
console.log(process.env.DB_USER);
const db = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
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
