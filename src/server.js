import app from './app';
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT, err => {
  if (!err) {
    console.log(`Server is running on ${process.env.PORT}`);
  } else {
    console.log(err);
  }
});
