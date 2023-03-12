import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import allRoutes from "./routes/allRoutes.js"
import swaggerDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


mongoose.set('strictQuery', false);

// configuring dotenv
dotenv.config();
const swaggerDocument = require("../swagger.json");


// create app server instance
const app = express();

// use of cors and body parse.....
app.use(cors());
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// morgan for logs
if(process.env.NODE_ENV === "development") {
  app.use(morgan())
}

//route
app.get("/", (req, res) => {
  res.status(200).send(`
  <h1 style="text-align: center; color: blue; margin-top: 20vh">Welcome to our api homepage</h1>
  `);
});



// app.get("/test", (req, res) => {
//   res.status(200).send(`
//   <h1 style="text-align: center; color: blue; margin-top: 20vh">Welcome to our api home page</h1>
//   `);
// });

app.use("/api/v1", allRoutes);

// define some variables......
const port = process.env.PORT;
const host = process.env.HOST;

// database connection instance
const con = () => mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});


// instance to listen to our server // port
const startServer = () => app.listen(port);

Promise.all([con(), startServer()])
  .then(() => {
    console.log(`MongoDB connected and server listening at http://${host}:${port}`);
  })
  .catch((err) => console.log(err))



  