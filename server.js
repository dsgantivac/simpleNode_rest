const express = require("express")
const sequelize = require("./Controllers/DatabaseController")
const app = express()
const path = require("path")



app.use(express.json())

app.set("view engine","pug");
app.set("views","views")

app.get("/",(req,res)=> {
    res.send("esta funcando mi prro")
})

app.post("/",(req,res) => {
    let name = req.body.name;
    res.send("el nombre es" + name)
})

const users_path = require("./Routes/User")
app.use(users_path)

app.use((req,res,next)=>{
    res.status(404).render(path.join(__dirname, "Views","404.pug"), {message: "esto se envia desde el servidor"});
    //res.send("404 page not found")
})

app.listen(3000,() => {
    console.log("app start on port 3000");
})


sequelize.sync({force: false, logging:false}).then(result => {
    console.log("database conection mela");
}).catch( err => {
    console.log(err);
})

//Client does not support authentication protocol requested by server; consider upgrading MySQL client'