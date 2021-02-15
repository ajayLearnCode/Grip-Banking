
const express=require("express");
const authController= require('../controllers/users');
const authController2=require('../controllers/transfer');
const router= express.Router();


router.get('/showusers',authController.register);

router.post('/showusers',authController2.register);

module.exports=router;