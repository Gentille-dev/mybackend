import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import allRoutes from "../backend/src/routes/allRoutes.js"


mongoose.set('strictQuery', false);

// configuring dotenv
dotenv.config();

// create server instance
const app = express();

// use of cors and body parse
app.use(cors());
app.use(bodyParser.json());


// app.use(express.json());
//app.get|('/', (req,res) => {
  //  res.response("hey everybodi");
//});


// route - home route
app.get("/test", (req, res) => {
  
  res.status(200).send(`
  <h1 style="text-align: center; color: blue; margin-top: 20vh">Welcome to our api home page</h1>
  `);
});

app.use("/api/v1", allRoutes);

// define some variables
const port = process.env.PORT;
const host = process.env.HOST;

// database connection instance
const con = () => mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

// instance to listen to our server
const startServer = () => app.listen(port);

Promise.all([con(), startServer()])
  .then(() => {
    console.log(`MongoDB connected and server listening at http://${host}:${port}`);
  })
  .catch((err) => console.log(err))



  