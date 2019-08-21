const express = require("express")
const app = express()

//database 
const sequelize = require("./Controllers/DatabaseController")
const session = require("express-session")
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//utils
const path = require("path")
const compression = require("compression")

//env variables
const dotenv = require('dotenv');
result = dotenv.config();


// deploy tools
const port = process.env.PORT ?  process.env.PORT: 3000; 
const SEQUELIZE_FORCE = process.env.SEQUELIZE_FORCE == "true" ? true: false; 
const SEQUELIZE_LOGGING = process.env.SEQUELIZE_LOGGING == "true"  ? true: false; 

const helmet = require("helmet")
const morgan = require("morgan")
app.use(helmet())
app.use(compression())
app.use(morgan("combined"))
app.use(express.json())
app.set("view engine","pug");
app.set("views","views")

// user session secret initialize hash
function extendDefaultFields(defaults, session) {
    return {
      data: defaults.data,
      expires: defaults.expires,
      userId: session.userId
    };
  }

app.use(session(
    {secret: 'bebecitaaaaaa', 
    store: new SequelizeStore({db:sequelize }) ,
    resave: false, 
    saveUninitialized: false})
    )


app.use((req,res,next) => {
    res.locals.testing = "testing form locas res"
    next()
})

app.get("/",(req,res)=> {
    res.send("get root request success")
})

app.post("/",(req,res) => {
    let name = req.body.name;
    res.send("el nombre es" + name)
})

const users_path = require("./Routes/User")
app.use(users_path)

const Auth_path = require("./Routes/Auth")
app.use(Auth_path)


app.use((req,res,next)=>{
    res.status(404).render(path.join(__dirname, "Views","404.pug"), {message: "esto se envia desde el servidor"});
    //res.send("404 page not found")
})

app.listen(port,() => {
    console.log("app start on port:" +port+ " sequelize force:"+SEQUELIZE_FORCE);
})

sequelize.sync({force: SEQUELIZE_FORCE, logging:SEQUELIZE_LOGGING}).then(result => {
    console.log("database connection mela");
}).catch( err => {
    console.log(err);
})

module.exports = app
