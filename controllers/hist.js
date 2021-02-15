var mysql = require('mysql');
const jwt=require("jsonwebtoken");

// const db=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'bankusers'
// });
var db = mysql.createConnection({
  host     : process.env.MYSQL_ADDON_HOST,
  database : process.env.MYSQL_ADDON_DB,
  user     : process.env.MYSQL_ADDON_USER,
  password : process.env.MYSQL_ADDON_PASSWORD
});

// another routes also appear here
// this script to fetch data from MySQL databse table
exports.register=(req,res)=>{
  console.log("transaction history !!");
    //var query='SELECT * FROM users';
    db.query('SELECT * FROM transaction', function (err, data,fields) {
    if (err) throw err;
    else{
      
      res.render('history', {histData: data}); 
    }
  });
}