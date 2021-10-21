import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(router);

app.all('*', (req, res, next) => {
  next(new Error('Page not found'));
});

app.use((err, req, res, next) => {
  console.log('app.js error handler\n', err);
  const { status, message } = err;
  res.status(status || 500).json(message);
});

export default app;
