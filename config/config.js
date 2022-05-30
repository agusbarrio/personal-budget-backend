const db = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'mysql',
  host: process.env.DB_HOST,
  logging: false,
};

module.exports = db;
