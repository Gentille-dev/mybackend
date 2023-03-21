import Blog from "../model/blog.js";

// import { blogs } from "../model/dummy.js"
// import errorFunc from "../utils/errorFunc.js";

class blogController {

    //get all blogs

    static async getBlogs(req, res) {
        try {
            const blogs = await Blog.find()
            res.status(200).json({
                data: blogs
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "server error"
            })
        }
    }

    // get one blog
    static async getBlog(req, res) {
        try {
            const { id } = req.params;        //USING ES6
            const blog = await Blog.findOne({ _id: id })
            if (!blog) {
                return res.status(404).json({
                    message: `blog id: ${id} not found`
                })
            } else {

                return res.status(200).json({
                    data: blog
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
    static async createBlogs(req, res) {
        try {
            const { title, description, author, imageUrl} = req.body
            // const newBlog = { id, title, author, description}

            const newBlog = await Blog.create({ title, description, author, imageUrl})


            res.status(201).json({
                message: "new blog created successfully",
                data: newBlog
            })
        } catch (error) {
            console.log(error);
            // res.status(500).json({
            // errorFunc (res, messageContent, status);
            // })
        }
    }

    //update  blogs

    static async updateBlogs(req, res) {
        //console.log(req.params.id)
        try {
            //const id = req.params.id   USING ES5
            const { id } = req.params;        //USING ES6

            //content to be updated
            const { title, description, author,imageUrl } = req.body
            const _id = id
            const blogUpdated = await Blog.findByIdAndUpdate(_id, { title, description, author, imageUrl}, { new: true });

            if (!blogUpdated) {
                return res.status(404).json({
                    message: `blog id: ${id} not found`
                })
            } else {

                return res.status(200).json({
                    message: `blog updated successfully`,
                    data: blogUpdated
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
    static async deleteBlogs(req, res) {
        try {
            const { id } = req.params

            //find blog
            const _id = id
            const blogDeleted = await Blog.findByIdAndDelete(_id)
            if (!blogDeleted) {
                return res.status(404).json({
                    message: `blog with id: ${id} not found`,

                });
            } else {

                return res.status(200).json({
                    message: `blog deleted successfully`,
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

export default blogController;
