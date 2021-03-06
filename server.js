var express    = require('express');
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");


var app = express();

app.get('/',function(req,res){
res.sendfile('index.html');
});

app.get('/send',function(req,res){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'YOUR_EMAIL_ID',
        pass: 'EMAIL_PASSWORD'
    }});
  transporter.sendMail({
	  from: 'dhirendra4work@gmail.com',
	  to: req.query.to,
	  subject: req.query.subject,
	  text: req.query.text
  },
  function(err,info){
     if(err){
       res.send('error');
	 } else {
       res.send('sent');
	 }
	 console.log(info);
	 console.log(err);
	 
  });
});

app.listen(3000,function(){
console.log("Express Started on Port 3000");
});
