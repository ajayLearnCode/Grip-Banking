const express=require("express");
const router= express.Router();

router.get("/",(req,res)=>{
    res.render("homepage");
});
router.get("/history",(req,res)=>{
    res.render("history");
});

router.get("/newuser",(req,res)=>{
    res.render("newuser");
});

router.get("/showusers",(req,res)=>{
    res.render("showusers");
});

module.exports=router;