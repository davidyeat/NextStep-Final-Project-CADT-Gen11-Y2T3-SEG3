import {Sequelize} from 'sequelize';
import ENV from './index.js';

console.log("Checking Env Variables:", {
  name: ENV.DB_NAME,
  user: ENV.DB_USER,
  pass: ENV.DB_PASSWORD ? "PROVIDED" : "MISSING"
});

const sequelize = new Sequelize(
  ENV.DB_NAME,
  ENV.DB_USER,
  ENV.DB_PASSWORD,
  {
    host: ENV.DB_HOST,
    port: ENV.DB_PORT,
    dialect: 'mysql',
    logging: console.log,
  }
);

export default sequelize;