
const express = require("express")
const app = express();

const postRoute = require ("./src/routes/post/routes/posts.route")
app.use(express.json());
app.use("/api/posts", postRoute);

const PORT = 8080;

app.listen( PORT,() => { 
console.log(`listening on port ${PORT}`);
})

