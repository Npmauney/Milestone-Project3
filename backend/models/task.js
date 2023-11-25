'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
  
    static associate({ User, Place }) {
      Task.belongsTo(User, { as: 'author', foreignKey: 'author_id' })
    }

  };
  Task.init({
    commentId: {
      type:  DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    authorId: DataTypes.SMALLINT,
    description: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    deadline: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'Task',
  });
  return Task;

};