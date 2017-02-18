var express=require("express");

var path = require("path");

var router = express.Router();

module.exports=router;

router.get("/",function(req,res){

	res.render("pages/index"); 

});

router.get("/about",function(req,res){

	console.log("You've logged to about");
	var users=[
		{"name":"Aswath", "email": "ases573@gmail.com"},
		{"name":"Kavi", "email": "kases573@gmail.com"},
		{"name":"TAmil", "email": "tases573@gmail.com"},

	];

	res.render("pages/about" , {users : users}); 

});

router.get("/contact",function(req,res){

	console.log("You've logged to contact");

	res.render("pages/contact"); 

});
router.post("/contact",function(request,response){

	console.log("You are posting an info");

	response.send("Thanks " + request.body.name + "!");
});