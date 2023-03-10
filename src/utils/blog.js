const userRouteDoc ={
    "/users": {
        get: listUser,
    },
};




const listUser = {

    "/users": {
        get: {
            tags: ["users"],
            responses: {
                200: {
                    description: "ok",
                    content: {
                        "application/json": {
                            schema: {
                                trype: "object",
                                example: {
                                    count: 0,
                                    user: [],

                                }
                            }
                        }
                    }
                }
            }

        },
    },
}



module.exports = userRouteDoc;