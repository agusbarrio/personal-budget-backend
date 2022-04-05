const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Operation extends Model {}
  Operation.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      concept: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.FLOAT, allowNull: false },
      _type: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'operation',
    }
  );
  return Operation;
};
/* (async () => {
  await Operation.sync({ force: true });
  sampleData();
})();
 */
