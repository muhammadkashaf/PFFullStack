const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

// APP CONFIG
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.options("*", cors());

//middleware
app.use(bodyParser.json());

//Routes
const projectRoutes = require("./routes/projects");
const modalFieldRoutes = require("./routes/modal");

const api = process.env.API_URL;
app.use(`${api}/projects`, projectRoutes);
app.use(`${api}/modal`, modalFieldRoutes);

//DB Config
const URI = process.env.CONNECTION_STRING;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

//Server
app.listen(port, () => console.log(`Listen on localhost:${port}`));
