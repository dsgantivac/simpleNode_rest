const chai = require("chai");
const chai_http = require("chai-http")
const app = require("../server")

chai.use(chai_http);
chai.should();

describe("User",() => {
    describe("users endpoint", () => {
        it('should get all users done !!!', () => {
            chai.request(app)
            .get("/users")
            .end((err,res) => {
                res.should.have.status(200)
                res.body.should.be.a('object');
                res.body.data.should.be.a('array');
            })
        })
        it('should post one user done !!!', () => {
            chai.request(app)
            .post("/users")
            .set("content-type","application/json")
            .send({
                    "name": "prueba edited",
                    "email": "prueba@gmail.com",
                    "password": "123456"
            })
            .end((err,res) => {
                res.should.have.status(200)
                res.body.should.be.a('object');
                
                if(res.body.id){
                    res.body.name.should.be.a("string")
                }else{
                    console.log("user exist");
                    res.body.message.should.be.a('string');
                }                
            })
        })

        it('should post one user done !!!', () => {
            chai.request(app)
            .post("/login")
            .set("content-type","application/json")
            .send({
                    "email": "prueba@gmail.com",
                    "password": "123456"
            })
            .end((err,res) => {
                res.should.have.status(200)
                res.body.message.should.be.a('string');
                
            })
        })
    })
})