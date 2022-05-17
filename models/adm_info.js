const Sequelize = require('sequelize');
module.exports = class AdmInfo extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        adm_id: {
          type: Sequelize.STRING(45),
          allowNull: false,
          primaryKey: true,
        },
        password: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        adm_name: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'AdmInfo',
        tableName: 'adm_info',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
  static associate(db) {
  };
};
