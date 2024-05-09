
var nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const sqlite3 = require ('sqlite3').verbose();
const {sendMail} = require('../views/script') 


db = new sqlite3.Database('./myDatabase.db',sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err)
})


// ,const {createAgent,createTenant,readAgents,updateAgent,deleteAgent} = require('../crud')
// const {createTenant,readAgents} = require('../crud')

router.get('/', (req, res) => {

    res.render('index');
})

router.get('/propertyDetails/:id', (req, res) => {

    res.render('propertyDetails');
})

router.get('/LogIn', (req, res) => {

    res.render('LogIn');
})

router.get('/ShowAgencies', (req, res) => {

    readAgents((err,rows) => {

        if(err){
            res.status(500).send(err.message)
        }
        else{
            res.status(200).json(rows)
        }
    })

    //res.render('Agency');
})

router.post('/Register', (req, res,callback) => {

    const {Name,Email,contactNumber,textMessage} = req.body
    const sql = `INSERT INTO Tenants (Name,Email,contactNumber,textMessage) VALUES (?,?,?,?)`
    db.run(sql,[Name,Email,contactNumber,textMessage],function(err){
        callback(err,{id: this.lastID})
    })
    
 

    sendMail(Name,Email,textMessage)
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true,
    //     auth:{
    //         user: 'kwenakomape2@gmail.com',
    //         pass: 'gbzz yuit rfxs vgso'
    //     },
    // });

    // transporter.sendMail({
    //     to: 'Fezco0963@gmail.com',
    //     subject: 'Interested in this property',
    //     html: '<h1>Hey Can we talk more about this property</h1>'

    // }).then(()=>{
    //     console.log("Email Sent")
    // }).catch(err=>{
    //     console.error(err)
    // })
    res.redirect("/propertyDetails/1")

})









module.exports =router;