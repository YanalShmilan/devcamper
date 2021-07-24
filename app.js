const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
// db conn
const connectDb = require('./db');
connectDb();
// Route files
const bootcamps = require('./routes/bootcamps');
// env vars
dotenv.config({ path: './config.env' });

const app = express();

// body parser
app.use(express.json());

// Dev logging mw
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV}`));

// error mw
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error ${err.message}`);
});
