const configAll = require('../../../config/config');
const dbConfig = configAll.getDataBase(process.env.NODE_ENV);
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,
  ssl : true,
  dialectOptions:{
     ssl :{
        require:true
     }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

exports.Sequelize = Sequelize;
exports.sequelize = sequelize;