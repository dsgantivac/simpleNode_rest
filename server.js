const express = require("express")
const sequelize = require("./Controllers/DatabaseController")
const app = express()

app.use(express.json())


app.get("/",(req,res)=> {
    res.send("esta funcando mi prro")
})

app.post("/",(req,res) => {
    let name = req.body.name;
    res.send("el nombre es" + name)
})

const users_path = require("./Routes/User")
app.use(users_path)



app.listen(3000,() => {
    console.log("app start on port 3000");
})


sequelize.sync({force: false, logging:false}).then(result => {
    console.log("database conection mela");
}).catch( err => {
    console.log(err);
})

//Client does not support authentication protocol requested by server; consider upgrading MySQL client'