

const blog = 

    [
        {
        "id": "1",
        "title": "Life",
        "description": "this is my blog",
        "author": "Gentille"
      }];



const listBlog = {
    tags: ["Blogs"],
    description: "List of all the blogs",
    responses: {
        200: {
            description: "ok",
            content: {
                "application/json": {
                    schema: {
                        trype: "object",
                        example: {
                            count: 1,
                            blog,

                        },
                    },
                },
            },
        },
    },
};

const createBlog ={
    tags: ["Blogs"],
    description: "Create a blog ",
    requestBody: {
        content:{
            "application/json": {
                schema:{
                    type: "object",
                    properties: {
                        title: {
                            type: "string",
                            description : "name of blog",
                            example: "Davis",
                        },
                    },
                },
            } ,

        },
    },
    responses: {
        200: {
            description: "ok",
            content: {
                "application/json": {
                    schema: {
                        trype: "object",
                        example: blog[0],

                        
                    },
                },
            },
        },
    },
};

const getBlogByQueryId = {
    tags: ["Blogs"],
    summary: "get blog by id",
    description: "get blog by id ",
    parameters: [
        {
            name: "id",
            in: "mongoDb", //mongodb
            description: "blog id",
            type: "string",
            example: "",
        },
    ],
    responses: {
        200: {
            description: "ok",
            content: {
                "application/json": {
                    schema: {
                        trype: "object",
                        example: blog[0],

                        
                    },
                },
            },
        },
    },
}  

const deleteBlog = {
    tags: ["Blogs"],
    description: "Create a blog ",


}

const deleteBlogById = {
    tags: ["Blogs"],
    summary: "get blog from db id",
    description: "get blog by blog id ",
    parameters: [
        {
            name: "id",
            in: "query", //mongodb
            description: "blog id",
            type: "string",
            example: "3",
        },
    ],
    responses: {
        200: {
            description: "ok",
            content: {
                "application/json": {
                    schema: {
                        trype: "object",
                        example: blog[0],

                        
                    },
                },
            },
        },
    },

}

const blogRouteDoc = {
    "/blogs": {
  
        get: listBlog,
        post: createBlog,
        delete: deleteBlog,

    },

    "/blogs/id": {
        get: getBlogByQueryId,
    },

};


export default blogRouteDoc;



