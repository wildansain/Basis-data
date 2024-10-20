//packages
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//utiles
import { connectDB } from './config/db.js';

dotenv.config();
const PORT = process.env.PORT || 5000

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get("/", (req, res) => {
  res.send("ngentot")
})

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:"+ PORT);
});

