import Message from "../model/message.js"

// import { blogs } from "../model/dummy.js"
// import errorFunc from "../utils/errorFunc.js";

class messageController {
    //functions

    //CRUD OPERATION

    //get all blogs

    static async getMessages(req, res) {
        try {
            const messages = await Message.find()
            res.status(200).json({
                data: messages
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "server error"
            })
        }
    }

    // get one blog
    static async getMessage(req, res) {
        try {
            const { id } = req.params;        //USING ES6
            const message = await Message.findOne({ _id: id })
            if (!message) {
                return res.status(404).json({
                    message: `message id: ${id} not found`
                })
            } else {

                return res.status(200).json({
                    data: message
                })
            }
        }
        catch (error) {
            console.log(error.message)
            // const messageContent = error.message;
            // const status = 500;
            // errorFunc (res, messageContent, status);
        }

    }

    //create blogs
    static async createMessages(req, res) {
        try {
            const { username, email, message } = req.body
            // const newBlog = { id, title, author, description}

            const newMessage = await Message.create({ username, email, message})


            res.status(201).json({
                message: "Message created successfully",
                data: newMessage
            })
        } catch (error) {
            console.log(error);
            // res.status(500).json({
            // errorFunc (res, messageContent, status);
            // })
        }
    }

    //update  blogs

    static async updateMessages(req, res) {
        //console.log(req.params.id)
        try {
            //const id = req.params.id   USING ES5
            const { id } = req.params;        //USING ES6

            //content to be updated
            const { username, email, message } = req.body
            const _id = id
            const messageUpdated = await Message.findByIdAndUpdate(_id, { username, email, message }, { new: true });

            if (!messageUpdated) {
                return res.status(404).json({
                    message: `message id: ${id} not found`
                })
            } else {

                return res.status(200).json({
                    message: `comment updated successfully`,
                    data: messageUpdated
                })
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "server error"
            })
        }
    }

    //delete blogs
    static async deleteMessages(req, res) {
        try {
            const { id } = req.params

            //find blog
            const _id = id
            const messageDeleted = await Message.findByIdAndDelete(_id)
            if (!messageDeleted) {
                return res.status(404).json({
                    message: `message with id: ${id} not found`,

                });
            } else {

                return res.status(200).json({
                    message: `comment deleted successfully`,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "server error"
            })
        }
    }

}

export default messageController;
