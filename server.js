const express = require("express")
const sequelize = require("./Controllers/DatabaseController")
const app = express()
const path = require("path")
const dotenv = require('dotenv');
result = dotenv.config();


const port = process.env.PORT ?  process.env.PORT: 3000; 


// deploy tools

const helmet = require("helmet")




app.use(helmet())
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

app.listen(port,() => {
    console.log("app start on port:" +port);
})


sequelize.sync({force: false, logging:false}).then(result => {
    console.log("database connection mela");
}).catch( err => {
    console.log(err);
})

//Client does not support authentication protocol requested by server; consider upgrading MySQL client'