// var express = require('express');
// var mysql = require('mysql');

// var router = express.Router();
// const db=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'bankusers'
// });
// // another routes also appear here
// // this script to fetch data from MySQL databse table
// router.get('/showusers', function(req, res, next) {
//     var sql='SELECT * FROM users';
//     db.query(sql, function (err, data, fields) {
//     if (err) throw err;
//     res.render('showusers', { title: '', userData: data});
//   });
// });
// module.exports = router;
const express=require("express");
const authController= require('../controllers/users');
const authController2=require('../controllers/transfer');
const router= express.Router();


router.get('/showusers',authController.register);

router.post('/showusers',authController2.register);

module.exports=router;