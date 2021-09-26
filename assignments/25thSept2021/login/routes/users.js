var express = require('express');
var router = express.Router();
var UserController = require('../controller/users');

/* GET users listing. */
router.post('/users', UserController.addUser);
router.get("/users",UserController.fetchUser);
router.delete("/users",UserController.removeUser);
router.put("/users",UserController.updateUser);
module.exports = router;
