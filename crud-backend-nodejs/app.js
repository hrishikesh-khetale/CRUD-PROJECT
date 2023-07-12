
const express = require('express');
const app = express()
const cors = require('cors');


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./config/config.env" });
}

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

//____
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ success: true, data: "GET Request Called Connected to Cloud" })
})
//____
const employee = require("./routes/employeeRoute");
//____
app.use("/api", employee);

module.exports = app