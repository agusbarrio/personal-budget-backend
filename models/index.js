const Sequelize = require('sequelize'),
  config = require('../config/config.js'),
  db = {};

sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  logging: config.logging,
  dialect: config.dialect,
});

//Models
const OperationModel = require('./operation.js')(
  sequelize,
  Sequelize.DataTypes
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Operation = OperationModel;

db.sequelize
  .authenticate()
  .then(() => console.log('Database: Successful connection'))
  .catch((err) => console.log('Database: Failed connection\n', err));

module.exports = db;
