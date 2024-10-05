import dotenv from 'dotenv'
import connectDB from "./db/index2.js";
import { app } from './app.js';

dotenv.config({
  path: './env'
})

connectDB().then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running at http:/localhost:${process.env.PORT}`)
  });
}).catch((err) => {
  console.log("MONGODB connection failed!!", err);
})
