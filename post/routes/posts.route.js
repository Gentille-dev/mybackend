import express from "express";
import { validationResult } from "express-validator";
import { check } from "express-validator";
import dataPost from "../data/posts.js";
import services from "../services/save.services.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json(dataPost)
});


router.post("/", [
    check('name', 'post name is required').not().isEmpty(),
    check('author', 'author name is required').not().isEmpty(),

], (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {name, author} = req.body;

    dataPost.push({
        name,
        author,
        id: Math.random(),
    })


   const isSaved =  save(dataPost)
if(!isSaved){
return res.status(500).json({
    error :true,
    message : "could not save post"
})
}
 
res.json({
    message: 'success'
})

}
);

export default router

