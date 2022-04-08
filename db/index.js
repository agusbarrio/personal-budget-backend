const Sequelize = require('sequelize'),
  config = require('./config.js'),
  db = {};

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config.options
);

//Models
const OperationModel = require('./models/Operation.js')(
  sequelize,
  Sequelize.DataTypes
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Operation = OperationModel;

(async () => {
  await db.sequelize.sync();
})();
db.sequelize
  .authenticate()
  .then(() => console.log('Database: Successful connection'))
  .catch((err) => console.log('Database: Failed connection\n', err));

module.exports = db;
