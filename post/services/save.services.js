import express from "express";
import dataPost from "../data/posts.js";
import fs from "fs";
import path from "path";



const router = express.Router()


function save(dataPost){
    try {
        fs.writeFileSync(path.join(__dirname), "..", "data", "post.js"), JSON.stringify(dataPost);
        return true;
    } catch (error) {
        
    }
}

export default router

