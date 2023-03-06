import express from "express";
import messageController from "../controllers/messageController.js"


const router = express.Router()

router.get("/", messageController.getMessages)
router.get("/:id", messageController.getMessages)
router.post("/", messageController.createMessages)
router.put("/:id", messageController.updateMessages)
router.delete("/:id", messageController.deleteMessages)


//logic and response

export default router