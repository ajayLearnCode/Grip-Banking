const express=require("express");
const authController3= require('../controllers/hist');
const router= express.Router();


router.get('/history',authController3.register);

module.exports=router;