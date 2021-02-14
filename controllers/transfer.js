const mysql=require("mysql");

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bankusers'
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