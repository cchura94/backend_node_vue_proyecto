'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      precio: {
        type: Sequelize.DECIMAL(12, 2)
      },
      stock: {
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      imagen: {
        type: Sequelize.STRING(255)
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categoria',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Productos');
  }
};