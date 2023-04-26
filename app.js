const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { corsConfig, PORT, DB_URL } = require('./appConfig');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const mainRouter = require('./routes/index');

const centralErrorHandler = require('./middlewares/centralErrorHandler');

const app = express();
app.use(express.json());

// CORS
app.use(cors(corsConfig));

// Логгирование запросов
app.use(requestLogger);

// Обработка запросов
app.use('/', mainRouter);

// Обработка ошибок
app.use(errorLogger);
app.use(centralErrorHandler);

// Запуск сервера
async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
    });

    app.listen(PORT, () => {
      console.log(`Приложение запущено на ${PORT} порту`);
    });
  } catch (err) {
    console.error(`Возникла ошибка при запуске приложения: ${err}`);
  }
}

startApp();
