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

const testConnection = async () => {
  try {
    console.log('🔍 Testing database connection...');
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
}

testConnection();

export default sequelize;