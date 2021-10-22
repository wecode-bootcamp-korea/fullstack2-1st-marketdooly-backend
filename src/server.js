import app from './app';
import dotenv from 'dotenv';

dotenv.config();
// dotenv.config({ path: `${__dirname}/../.env` });

app.listen(process.env.PORT, err => {
  if (!err) {
    console.log(`Server is running on ${process.env.PORT}`);
  } else {
    console.log(err);
  }
});
