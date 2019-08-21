const chai = require("chai");
const chai_http = require("chai-http")
const app = require("../server")

chai.use(chai_http);
chai.should();

describe("login",()=>{
    describe("login email and password", () => {
        it("should be a password match",() => {
            chai.request(app)
            .post("/login")
            .set("content-type",'application/json')
            .send({
                "email": "prueba@gmail.com",
                "password": "123456"
            })
            .end((err,res) => {
                res.should.have.status(200)
                res.body.message.should.be.a("string")
            })
        })
    })
})