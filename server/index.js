import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from "helmet";

import userRouter from "./routes/user.js";
import stockRouter from './routes/stock.js';
import watchlistRouter from './routes/watchlist.js';
import priceRouter from './routes/price.js';
import livepriceRouter from './routes/liveprice.js';
import stockinfoRouter from './routes/stockinfo.js';
import triggerRouter from './routes/trigger.js';
import contactRouter from './routes/contact.js';
import { fetchData } from './script.js';
import { fetchLivedata } from './livescript.js';
import { removeData } from './initialscript.js';
import { removeStock } from './changestockscript.js';
import { checkExecuteTrigger } from './triggerscript.js';
import { fetchOpenPrice } from './openpricescript.js';

import { createRequire } from 'module';
import Alpaca from '@alpacahq/alpaca-trade-api';
const require = createRequire(import.meta.url);
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(cors());
/*
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE ,PUT");

  next();
});
*/

app.use(helmet());
app.use(cors());
/*
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
}) 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
*/
app.use("/stock", stockRouter);
app.use("/user", userRouter);
app.use("/watchlist", watchlistRouter);
app.use("/price", priceRouter);
app.use("/liveprice", livepriceRouter);
app.use("/fundamental", stockinfoRouter);
app.use("/trigger", triggerRouter);
app.use("/contact", contactRouter);

app.get("/run", fetchData);
app.get("/liverun", fetchLivedata);
app.get("/initialconfigure", removeData);
app.get("/deletestock", removeStock);
app.get("/executetrigger", checkExecuteTrigger);
//app.get("/fetchopenprice", fetchOpenPrice);
app.get('/', (req, res) => {
  res.send('Welcome to Schedule-job for fetching stocks');
})
//const CONNECTION_URL = 'mongodb://localhost:27017/stockdb';

const CONNECTION_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);