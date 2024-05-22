const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const User = require("./user")(sequelize, DataTypes);

sequelize.sync().then(() => {
  console.log("Database & tables created!");
});

module.exports = {
  User,
};
