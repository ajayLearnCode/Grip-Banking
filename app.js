const express=require("express");
const mysql=require("mysql");
const app=express();
const path=require("path");

// const db=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'bankusers'
// })
var db = mysql.createConnection({
    host     : process.env.MYSQL_ADDON_HOST,
    database : process.env.MYSQL_ADDON_DB,
    user     : process.env.MYSQL_ADDON_USER,
    password : process.env.MYSQL_ADDON_PASSWORD
});

const publicDirectory=path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine','hbs');

db.connect((error)=>{
    if(error){
        console.log(error);    
    }
    else{
        console.log("SQL Connected successfully");
    }
})

app.use('/',require('./routes/pages'));
app.use('/newuser',require('./routes/pages'));
app.use('/history',require('./routes/pages'));
app.use('/hist',require('./routes/hist'));
app.use('/showusers',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));
app.use('/users',require('./routes/users'));



app.listen(8080,()=>{
    console.log("server started");
});