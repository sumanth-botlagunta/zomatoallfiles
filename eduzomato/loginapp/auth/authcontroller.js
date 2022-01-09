var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var User = require('./usermodel');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.get('/users',(req,res) => {
    User.find({},(err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

router.post('/register',(req,res) => {
    var hashpassword = bcrypt.hashSync(req.body.password,8);
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashpassword,
        phone:req.body.phone,
        role:req.body.role?req.body.role:'User'
    },(err,data) => {
        if(err) return res.status(500).send('Error')
        res.status(200).send('Register success')
    })
})

router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) return res.status(500).send("Error")
        if(!user) return res.status(500).send({auth:false,token:'No user Found'})
        else{
            const passIsValid = bcrypt.compareSync(req.body.password, user.password)
            if(!passIsValid) return res.status(500).send({auth:false,token:'Invalid password'})
            var token = jwt.sign({id:user._id}, config.secret, {expiresIn:86400})
            res.send({auth:true,token:token})
        }
    })
})

router.get('/userInfo',(req,res) => {
    var token = req.headers['x-access-token'];
    if(!token) return res.status(500).send({auth:false,token:'No Token Provided'})
    jwt.verify(token, config.secret, (err,user) => {
        if(err) return res.status(500).send({auth:false,token:'Invalid Token'})
        User.findById(user.id,(err,result) => {
            res.send(result)
        })
    })
})



module.exports = router