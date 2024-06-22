'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      Task.belongsTo(User, { as: 'author', foreignKey: 'author_id' })
    }
  }
  Task.init({
    taskId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    author_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    deadline: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
    underscored: true,
  });
  return Task;
};