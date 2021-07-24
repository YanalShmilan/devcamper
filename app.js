const express = require('express');
const dotenv = require('dotenv');

// env vars
dotenv.config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV}`));