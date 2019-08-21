const express = require("express")
const router = express.Router()
const userController = require("../Controllers/UserController")

path = "/users"

router.get(path+ "/:id", userController.findUser)

router.get(path, userController.getUsers); 

router.post(path, userController.createUser);

router.put(path, userController.updateUser);

router.delete(path, userController.deleteUser);

module.exports = router

