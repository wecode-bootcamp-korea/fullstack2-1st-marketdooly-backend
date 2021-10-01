import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json()); // post request body parser

export default app;
