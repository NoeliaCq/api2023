'use strict';
module.exports = (sequelize, DataTypes) => {
  const docente = sequelize.define('docente', {
    DNI: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {});
  
  return docente;
};