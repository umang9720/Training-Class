const express = require('express')
const router = express.Router();
const UserController = require('../controllers/usercontroller')

router.get('/user',(res,req)=>{
    UserController.getUser(req,res)
})

router.get('/user/:id', (req,res)=>{
    UserController.getParticularUser(req,res)
})

module.exports = router;