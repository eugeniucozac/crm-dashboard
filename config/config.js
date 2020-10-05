require("dotenv").config()
//npx sequelize db:migrate --env production
//npx sequelize db:migrate --env staging
//npx sequelize db:migrate --env development
module.exports = {
  development: {
    use_env_variable: process.env.DEV_DB_URL,
  },
  development: {
    database: process.env.DEV_DB_NAME,
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
    host: process.env.DEV_DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  },
  production: {
    use_env_variable: process.env.PROD_DB_URL,
  },
  production: {
    database: process.env.PROD_DB_NAME,
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASS,
    host: process.env.PROD_DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  },
}
