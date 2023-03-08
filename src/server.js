import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import allRoutes from "./routes/allRoutes.js"
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";
import router from "./routes/blogRoute.js";



mongoose.set('strictQuery', false);

// configuring dotenv
dotenv.config();

// create server instance
const app = express();

// use of cors and body parse.....
app.use(cors());
app.use(bodyParser.json());

//route
app.get("/users", (req, res) => {
  res.status(200).send(`
  <h1 style="text-align: center; color: blue; margin-top: 20vh">Welcome to our api homepage</h1>
  `);
});



//setting swagger documentation

router.get("/users", (req,res) => {
  return res.json ({
    count: DataTransfer.length,
    values: data  ,
  })
})

const options = {
  definition: {
    openApi: "3.0.0",
    info: {
      title: "Backend API",
      description: "Sample backend apis",

    },
    Servers: [
      {
    URL: "http://localhost:9999/",
    description: "Local dev",
      },{
      URL: "http://localhost:8080/",
    description: "second server for dev dev",
      }

    ],
    tags: [{
      name: "user",
      description: "route for users",
    }

    ],
    paths: {
      "/users":{
        get: {
          tags: ["users"],
          description: "List of all the users",
          responses: {
            200: {
              description: "ok",
              content: {
                "application/json": {
                  schema: {
                    trype: "object",
                    example: {
                      count: 0,
                      user:[],
                  
                    }
                  }
                }
              }
            }
          }

        },
      }
    }, 

    paths: {
      "/users":{
        get: {
          tags: ["users"],
          description: "List of all the users",
          responses: {
            200: {
              description: "ok",
              content: {
                "application/json": {
                  schema: {
                    trype: "object",
                    example: {
                      count: 0,
                      user:[],
                  
                    }
                  }
                }
              }
            }
          }

        },
      }
    }, 

  },
  apis: ["server.js"],
  };
  
  const specs = swaggerJSDoc(options)
  app.use("/api-docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(specs)
  )
  


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


// instance to listen to our server
const startServer = () => app.listen(port);

Promise.all([con(), startServer()])
  .then(() => {
    console.log(`MongoDB connected and server listening at http://${host}:${port}`);
  })
  .catch((err) => console.log(err))



  