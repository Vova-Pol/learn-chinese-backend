const corsConfig = {
  origin: ['http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200,
  credentials: true,
};

const { PORT = 3002 } = process.env;
const { DB_URL = 'mongodb://localhost:27017/learn-chinese-db' } = process.env;

module.exports = {
  corsConfig,
  PORT,
  DB_URL,
};
