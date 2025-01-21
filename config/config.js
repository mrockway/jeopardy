require('@dotenvx/dotenvx').config();

module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "jeopardy",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    ssl: true,
    dialectOptions: { ssl: { require: true } },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};