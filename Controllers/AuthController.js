const User = require("../Models/User")
const bcrypt = require("bcryptjs")

module.exports = {
    postLogin: (req,res) => {
        let email = req.body.email;
        let password = req.body.password;

        User.findOne({where:{email:email}}).then(user => {
            if(user){
                bcrypt.compare(password,user.password).then(result => {
                    if(result){
                        req.session.isLoggedIn = true;
                        req.session.user = user
                        req.session.save(); 
                        res.send("password match")
                    }else{
                        res.send("password dismatch")
                    }
                })
            }else{
                res.send("user not find")
            }            
        })
    }
}