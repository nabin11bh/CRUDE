const { Sequelize, DataTypes } = require("sequelize");

//const sequelize = require("sequelize")
//const Sequelize = sequelize.Sequelize
//const sequelize = sequelize.DataTypes

const sequelize = new Sequelize(
  "postgresql://postgres.cfclimtxdfyigmlcabds:supabasepw11@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
