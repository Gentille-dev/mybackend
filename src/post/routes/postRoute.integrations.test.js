
const express =  require("express")
const request =  require("supertest")
const postRoute =  require("../../post/routes/posts.route")


const app = express();
const dataPost = require("../../post/data/posts.json")

app.use(express.json());
app.use("api/posts", postRoute);

describe("integration test for post aAPI", () => {
    it('GET /api/posts -success -get all the posts', async () => {
        const { body, statusCode } = await request(app).get("/api/posts")

        expect(body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    author: expect.any(String)

                })
            ])
        )
expect(statusCode).toBe(200);

    });
    it('POST /api/posts  - failure on invalid post body', async() =>{
        const { body, statusCode} = await (await request(app).post("/api/posts")).send({
            name: "",
            author: "gentille gentil"
        })

        console.log(body);
        expect(statusCode).toBe(400);
        expect(body).toEqual({
            errors: [{
                location: "body",
                msg: "post name is required",
                param: "name",
                value: ""
            }]
        });
    });

    it('GET /api/posts -success', async() => {
        const { body, statusCode} = await (await request(app).post("/api/posts")).send({
            name: "andela",
            author: "gentille gentille"
        });
        expect(statusCode).toBe(200);
        expect(body).toEqual ({
            message: "success"
        });
    });

    it('PUT /api/posts/:postId -failure when post is not found', async() => {
        const { body, statusCode} = await (await request(app).post("/api/posts/1000")).send({
            name: "music is life",
            author: "genny"
    });
    expect(statusCode).toBe(404);
    expect(body).toEqual ({
        error:true ,
        message: "post not found"
    })
});

});