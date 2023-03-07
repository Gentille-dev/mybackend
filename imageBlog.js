import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary'
const app = express();

cloudinary.config({
    cloud_name: "dzy1drqcm",
    api_key: "555662163364287",
    api_secret: "7oVjgLtolDTGxASB26tQo5nfePU"
  });

const storage = new CloudinaryStorage({
  cloudinary,
  params:{
    folder: 'blogs-image',
    allowed_formats: ['jpg', 'png']
  }
});

const upload = multer({ storage }).single('image');

app.get("/", (req,res) => (
  res.send("home[")
))
app.post('/upload',(req, res) =>{
  upload(req, res, (err) =>{
    if(err){
      console.log(err)
    }
    res.send({ image: req.file.path })
  })
})
console.log("ghshcg");
app.listen(3000,()=>console.log("server connected"));

