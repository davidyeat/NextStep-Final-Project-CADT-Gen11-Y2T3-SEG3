import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

console.log("Checking Env Variables:", {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD ? "PROVIDED" : "MISSING"
});

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: console.log,
  }
);

export default sequelize;