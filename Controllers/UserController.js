const User = require("../Models/User")

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
            console.log(response);
            res.send({data: elements})
        }).catch(err => {
            console.log(err);
            res.send("error searching")
            
        })
    },
    createUser: (req,res) => {
        let name = req.body.name
        let email = req.body.email

        User.create({
            name: name,
            email: email
        }).then(response => {
            console.log(response);
            response.save()
            res.send( response.dataValues)
        }).catch(err => {
            console.log(err);
            res.send("error creating user: "+err.errors[0].message)
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