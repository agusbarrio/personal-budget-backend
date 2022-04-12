const Sequelize = require('sequelize'),
  config = require('../config/config.js'),
  db = {};

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config.options
);

//Models
const OperationModel = require('./Operation.js')(
  sequelize,
  Sequelize.DataTypes
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Operation = OperationModel;

(async () => {
  await db.sequelize.sync({ force: true });
  require('../sample/sample-data')(db.Operation);
})();

db.sequelize
  .authenticate()
  .then(() => console.log('Database: Successful connection'))
  .catch((err) => console.log('Database: Failed connection\n', err));

module.exports = db;
