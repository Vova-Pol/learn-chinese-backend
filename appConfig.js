const corsConfig = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

const { PORT = 3002 } = process.env;
const { DB_URL = 'mongodb://localhost:27017/learn-chinese-db' } = process.env;

module.exports = {
  corsConfig,
  PORT,
  DB_URL,
};
