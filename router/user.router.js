const router = require('express').Router();
const UserController = require('../controler/user.controler');
router.post("/registration",UserController.register);
module.exports =router;