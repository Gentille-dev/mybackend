
const express = require("express")
const dataPost = require("../data/posts.json")
const fs = require("fs")
const path = require("path")


const router = express.Router()


function save(dataPost){
    try {
        fs.writeFileSync(path.join(__dirname), '..', 'data', 'posts.json'), JSON.stringify(dataPost);
        return true;
    } catch (error) {
        return false
    }
}

module.exports = router

