import express from "express";
import blogController from "../controllers/blogController.js";
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary'


const router = express.Router()

router.get("/", blogController.getBlogs)
router.get("/:id", blogController.getBlog)
router.post("/", blogController.createBlogs)
router.put("/:id", blogController.updateBlogs)
router.delete("/:id", blogController.deleteBlogs)



// SWAGGER DOCUMENTATION PART




// WORKING ON UDDING BLOG WITH CLOUDINARY IMAGE
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

// cloudinary link
router.post('/upload',(req, res) =>{
  upload(req, res, (err) =>{
    if(err){
      console.log(err)
    } else 
    res.send({ image: req.file.path })
  })
}) 

export default router







 