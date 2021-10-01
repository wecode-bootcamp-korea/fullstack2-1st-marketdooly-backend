import app from "./app.js";

const PORT = 3000 || process.env.PORT;

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on ${PORT}`);
  } else {
    console.log(err);
  }
});
