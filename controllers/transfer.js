const mysql=require("mysql");

var db = mysql.createConnection({
    host     : process.env.MYSQL_ADDON_HOST,
    database : process.env.MYSQL_ADDON_DB,
    user     : process.env.MYSQL_ADDON_USER,
    password : process.env.MYSQL_ADDON_PASSWORD
});

exports.register=(req,res)=>{

    const{sendername,recipient,amount}=req.body;
    
    db.query('INSERT INTO transaction SET?',{sender:sendername,recipient:recipient,amount:amount},(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            return res.render('newuser',{
                message2:'Transfer Successfully'
            });
        }
    })
}