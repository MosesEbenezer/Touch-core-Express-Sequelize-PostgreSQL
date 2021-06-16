'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Event.init({
    id: { type: DataTypes.INTEGER, primaryKey: true },
    type: DataTypes.STRING,
    actor: DataTypes.JSON,
    repo: DataTypes.JSON,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};