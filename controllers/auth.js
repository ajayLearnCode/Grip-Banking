const mysql=require("mysql");
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



exports.register=(req,res)=>{
    // const name=req.body.name;
    // const email=req.body.email;
    // const balance=req.body.balance;

    const{name,email,balance}=req.body;

    db.query('SELECT email FROM users WHERE email=?',[email],(error,result)=>{
        if(error){
            console.log(error);
        }
        if(result.length>0){
            return res.render('newuser',{
                message:'email already present'
            });
        }

        db.query('INSERT INTO users SET?',{name:name,email:email,balance:balance},(error,result)=>{
            if(error){
                console.log(error);
            }
            else{
                return res.render('newuser',{
                    message:'User created Successfully'
                });

            }
        })
    })

}