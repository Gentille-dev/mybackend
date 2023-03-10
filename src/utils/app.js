

{
    "swagger": "2.0",
    "info": {
      "version": "1.0.0",
      "title": "my_brand API",
      "description": "my_brand, is a personale blog api documentation",
      "contact": {
        "name": "KAYITARE Cynthia",
        "email": "kacynthian@gmail.com"
      }
    },
    "host": "localhost:9999api/v1",
    "schemes": ["http", "https"],
    "paths": {
      "/user": {
        "post": {
          "tags": ["Authentication"],
          "summary": "create a new user",
          "parameters": [
            {
              "name": "user credentials",
              "in": "body",
              "description": "Password and email of a user. password and repeatPassword must have the same value",
              "required": true,
              "schema": {
                "example": {
                  "fullName": "KAYITARE Cynthia",
                  "email": "kacynthn@gmail.com",
                  "password": "Cycy@1234",
                  "repeatPassword": "Cycy@1234"
                }
              }
            }
          ],
          "consumes": ["application/json"],
          "responses": {
            "201": {
              "description": "New user successfully created"
            },
            "403": {
              "description": "Email is Arleady Exist"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/login": {
        "post": {
          "tags": ["Authorization"],
          "summary": "user login",
          "parameters": [
            {
              "name": "user credential",
              "in": "body",
              "description": "email and passowrd of a user",
              "required": "true",
              "schema": {
                "example": {
                  "email": "kacynthian@gmail.com",
                  "password": "Cycy@1234"
                }
              }
            }
          ],
          "consumes": ["application/json"],
          "responses": {
            "200": {
              "description": "user successfully logged in"
            },
            "401": {
              "description": "Invalid email or Passowrd"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/blog": {
        "post": {
          "security": [
            {
              "Bearer": []
            }
          ],
          "tags": ["Blogs"],
          "summary": "Post a new blog",
          "consumes": ["multipart/form-data"],
          "produces": ["application/json"],
  
          "parameters": [
            {
              "in": "formData",
              "name": " blogMainTitle",
              "description": "blog main title",
              "type": " string"
            },
            {
              "in": "formData",
              "name": " blogTitle",
              "description": "blog title",
              "type": " string"
            },
            {
              "in": "formData",
              "name": " blogAuthor",
              "description": "blog Author",
              "type": " string"
            },
            {
              "in": "formData",
              "name": " blogImage",
              "description": "blog Image",
              "type": " string"
            },
            {
              "in": "formData",
              "name": " blogSummary",
              "description": "blog Summary",
              "type": " string"
            },
            {
              "in": "formData",
              "name": " blogDescription",
              "description": "blog description",
              "type": " string"
            }
          ],
          "responses": {
            "200": {
              "description": "blog successfully created!"
            },
            "401": {
              "description": "Validation fails"
            },
            "404": {
              "description": "token error"
            },
            "500": {
              "description": "server error"
            }
          }
        },
  
        "get": {
          "summary": "get all blogs posted.",
          "description": "it shows a list of all blogs created.",
          "tags": ["Blogs"],
          "produces": ["application/json"],
          "responses": {
            "200": {
              "description": "OK"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      },
      "/comment/{id}": {
        "post": {
          "security": [
            {
              "Bearer": []
            }
          ],
          "tags": ["Blogs"],
          "summary": "Create a new comment",
          "consumes": ["application/json"],
          "produces": ["application/json"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "ID of blog to comment",
              "required": true,
              "type": "string"
            },
            {
              "name": "user id",
              "in": "path",
              "description": "ID of user to comment",
              "required": true,
              "type": "string"
            },
            {
              "in": "body",
              "name": "Comment",
              "description": "Comment Body",
              "schema": {
                "example": {
                  "content": "iyo blog shahu"
                }
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Comment added successfully!"
            },
            "401": {
              "description": "Validation fails"
            }
          }
        }
      },
      "/blog/{id}": {
        "get": {
          "tags": ["Blogs"],
          "summary": "Find blog by ID",
          "description": "Returns a single blog",
          "produces": ["application/json"],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "description": "Return ID of a blogs with it's data",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": " blog with idnumber retrieved successfuly"
            },
            "404": {
              "description": "blog with idnumber not found"
            }
          }
        },
        "patch": {
          "security": [
            {
              "Bearer": []
            }
          ],
          "tags": ["Blogs"],
          "summary": "Update the blog",
          "description": "Update the blog",
          "consumes": ["multipart/form-data"],
          "produces": ["application/json"],
          "parameters": [
            {
              "name": "blogID",
              "in": "path",
              "description": "ID of the blog that needs to be updated",
              "required": true,
              "type": "string"
            },
            {
              "name": "blogMainTitle",
              "in": "formData",
              "description": "Update main title of the blog",
              "required": true,
              "type": "string"
            },
            {
              "name": "blogTitle",
              "in": "formData",
              "description": "Update title of the blog",
              "required": true,
              "type": "string"
            },
            {
              "name": "blogAuthor",
              "in": "formData",
              "description": "Update blogAuthor of the blog",
              "required": false,
              "type": "string"
            },
            {
              "name": "blogImage",
              "in": "formData",
              "description": "Update blogImage of the blog",
              "required": false,
              "type": "string"
            },
            {
              "name": " blogSummary",
              "in": "formData",
              "description": "Update blogSummary of the blog",
              "required": false,
              "type": "string"
            },
            {
              "name": "blogDescription",
              "in": "formData",
              "description": "Update blogDescription of the blog",
              "required": false,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": " blog with idnumber successfuly updated"
            },
            "401": {
              "description": "Invalid input"
            },
            "404": {
              "description": "You don't have access to this api"
            }
          }
        },
        "delete": {
          "security": [
            {
              "Bearer": []
            }
          ],
          "tags": ["Blogs"],
          "summary": "Delete the blog",
          "description": "Delete the single blog",
          "produces": ["application/json"],
          "parameters": [
            {
              "name": "blogID",
              "in": "path",
              "description": "blog id to delete",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "blog successfuly deleted"
            },
            "404": {
              "description": "blog not found"
            }
          }
        }
      },
  
      "/message": {
        "post": {
          "tags": ["Queries"],
          "summary": "Create a new query",
          "consumes": ["application/json"],
          "produces": ["application/json"],
          "parameters": [
            {
              "in": "body",
              "name": "Query",
              "description": "Query Body",
              "schema": {
                "example": {
                  "fullName": "KAYITARE Cynthia",
                  "email": "kayitare@gmail.com",
                  "message": "huhuhu"
                }
              }
            }
          ],
          "responses": {
            "201": {
              "description": "your message well received!"
            },
  
            "401": {
              "description": "Validation fails"
            }
          }
        },
        "get": {
          "security": [
            {
              "Bearer": []
            }
          ],
          "summary": "Return the list of all queries.",
          "description": "This will shows all created queries.",
          "tags": ["Queries"],
          "produces": ["application/json"],
          "responses": {
            "200": {
              "description": "OK"
            },
            "401": {
              "description": "Authentication failed"
            },
            "500": {
              "description": "Server error"
            }
          }
        }
      }
    },
    "securityDefinitions": {
      "Bearer": {
        "type": "apiKey",
        "name": "x-auth-token",
        "in": "header"
      }
    },
    "definitions": {
      "Blog": {
        "type": "object",
        "required": [
          "main title",
          "title",
          "blog author",
          "blog Image",
          "blog Summary",
          "blog description"
        ],
        "properties": {
          "blogMainTitle": {
            "type": "string",
            "example": "This is main title of a blog"
          },
          "blogTitle": {
            "type": "string",
            "example": "This is title of a blog"
          },
          "blogAuthor": {
            "type": "string",
            "example": "This is author  of a blog"
          },
  
          "blogImage": {
            "type": "string"
          },
          "blogSummary": {
            "type": "string",
            "example": "This is a short summary of a blog"
          },
          "blogDescription": {
            "type": "string",
            "example": "This is a description of a blog"
          },
          "user": {
            "type": "id of a user who post the blog"
          }
        }
      },
      "User": {
        "type": "object",
        "required": ["fullName", "email", "password", "repeatPassword"],
        "properties": {
          "fullName": {
            "type": "string",
            "example": "KAYITARE Cynthia"
          },
          "email": {
            "type": "string",
            "example": "kacynthian@gmail.com"
          },
          "password": {
            "type": "string",
            "example": "password"
          },
          "repeatPassword": {
            "type": "string",
            "example": "password"
          }
        }
      },
      "Message": {
        "type": "object",
        "required": ["fullName", "email", "message"],
        "properties": {
          "fullName": {
            "type": "string",
            "example": "KAYITARE Cynthia"
          },
          "email": {
            "type": "string",
            "example": "kacynthian@gmail.com"
          },
          "message": {
            "type": "string",
            "example": "These are some message"
          }
        }
      },
      "Comment": {
        "type": "object",
        "required": ["user", "blog id", "content"],
        "properties": {
          "user": {
            "type": "string",
            "example": "5f6c9bd973ec4641bd7c3ae4"
          },
          "blog": {
            "type": "string",
            "example": "5f6c9bd973ec4641bd7c3ae4"
          },
          "content": {
            "type": "string",
            "example": "This is some comment"
          }
        }
      }
    }
  }