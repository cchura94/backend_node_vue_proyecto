'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Cliente.belongsTo(models.Pedido, {
        foreign: 'ClienteId'
      });
    }
  }
  Cliente.init({
    nombre_completo: DataTypes.STRING,
    ci: DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    correo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente'
  });
  return Cliente;
};