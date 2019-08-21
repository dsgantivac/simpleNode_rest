const User = require("../Models/User")
const bcrypt = require("bcryptjs")

module.exports = {
    findUser: (req,res) => {
        let id = req.params.id
        User.findOne({
            where: {
                id: id
            }
        }).then(response => {
            res.send(response)
        }).catch(err => {
            res.send("user not exist")
        })
    },
    getUsers: (req,res) => {
        User.findAll().then(response => {
            let elements = []
            response.forEach(element => {
                elements.push(element.dataValues)
            });
            //console.log(response);
            res.send({data: elements})
        }).catch(err => {
            //console.log(err);
            res.send("error searching")
            
        })
    },
    createUser: (req,res) => {
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password

        bcrypt.hash(password,12).then(encryptPassword => {
            User.create({
                name: name,
                email: email,
                password: encryptPassword
            }).then(response => {
                response.save()
                res.send( response.dataValues)
            }).catch(err => {
                res.send("error creating user: "+err.errors[0].message)
            })
        })

    },
    updateUser: (req,res) => {
        let id = req.body.id;
        let newName = req.body.name;
        User.findOne({where: {
            id: id
        }}).then(user => {
            user.name = newName;
            return user.save();
        }).then(response => {
            res.send("user updated")
        }).catch(err => {
            req.send("error")
        })

    },
    deleteUser: (req,res) => {
        let id = req.body.id

        User.findOne({
            where: {
                id: id
            }
        }).then(response => {
            return response.destroy()
        }).then(response => {
            res.send("user delete success")
        }).catch(err => {
            res.send("error deleting user")
        })

    }
}