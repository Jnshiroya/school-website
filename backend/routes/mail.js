const express=require('express');
const router=express.Router();
var nodemailer = require('nodemailer');
router.post('/users',(req,res)=>{
  console.log(req.body.uname,req.body.password);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jenishshiroya152@gmail.com',
          pass: 'yvabagxtdssygaia'
        }
      });
      
      var mailOptions = {
        from: 'jenishshiroya152@gmail.com',
        to: req.body.email,
        subject: 'YOUR REGISTRATION SUCCESSFULLY',
        text: `USER NAME :${req.body.uname}
               PASSWORD :${req.body.password}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.status(500).send("Internal Server Error!");
        } else {
          console.log('Email sent: ' + info.response);
          res.json({success:true});
        }
      });
})
module.exports = router