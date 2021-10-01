import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err, req, res, next) => {
  console.log(err);
  const { status, message } = err;
  res.status(status || 500).json(message);
});

export default app;