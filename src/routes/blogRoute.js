import express from "express";
import blogController from "../controllers/blogController.js";


const router = express.Router()

router.get("/", blogController.getBlogs)
router.get("/:id", blogController.getBlog)
router.post("/", blogController.createBlogs)
router.put("/:id", blogController.updateBlogs)
router.delete("/:id", blogController.deleteBlogs)


//logic and response

export default router







 