
var nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const sqlite3 = require ('sqlite3').verbose();



db = new sqlite3.Database('./myDatabase.db',sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err)
})


// ,const {createAgent,createTenant,readAgents,updateAgent,deleteAgent} = require('../crud')
// const {createTenant,readAgents} = require('../crud')

router.get('/',async (req, res,callback) => {
    
    const sql = `SELECT * FROM PropertyDetails`;
    //db.all(sql,[],callback)
    await db.all(`SELECT * FROM PropertyDetails`, function(err, rows) {
        if(err){
            console.log(err.message)
        }
        else{
            res.render('index',{rows});
        }
     });

    
    
})

router.get('/propertyDetails/:id',async (req, res) => {

    var number = String(req.params.id)
    
    console.log(req.params)
    // const sql = `SELECT * FROM PropertyDetails`;
    // //db.all(sql,[],callback)
    await db.all(`SELECT * FROM PropertyDetails WHERE Number = ${number}`, function(err, rows) {
        if(err){
            console.log(err.message)
        }
        else{
        
            res.render('propertyDetails',{rows});
        }
     });

    //  const sql = `DELETE FROM Agents WHERE id = ?`
    //  db.run(sql, id,callback)

})

router.get('/LogIn', (req, res) => {

    res.render('LogIn');
})

router.get('/tenantsDetails', async(req, res) => {

    await db.all(`SELECT * FROM Tenants`, function(err, rows) {
        if(err){
            console.log(err.message)
        }
        else{
            console.log(rows)
            res.render('tenantsDetails',{rows});
        }
     });

})

router.post('/tenantsDetails', (req, res) => {

    const {email,password} = req.body

    res.redirect('tenantsDetails');
    
})

router.get('/tenantInterest/:id',async (req, res) => {
    var number = String(req.params.id)
    
    //console.log(req.params)
    // const sql = `SELECT * FROM PropertyDetails`;
    // //db.all(sql,[],callback)
    await db.all(`SELECT * FROM PropertyDetails WHERE Number = ${number}`, function(err, rows) {
        if(err){
            console.log(err.message)
        }
        else{
        
            res.render('tenantInterest',{rows});
        }
     });

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

    const {Name,Email,contactNumber,textMessage,propertyNumber} = req.body
    console.log(req.body)
    const sql = `INSERT INTO Tenants (Name,Email,contactNumber,textMessage,propertyNumber) VALUES (?,?,?,?,?)`
    db.run(sql,[Name,Email,contactNumber,textMessage,propertyNumber],function(err){
        callback(err,{id: this.lastID})
    })
    
 

    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: 'kwenakomafpe2@gmail.com',
            pass: 'gbzz yuit rfxs vgsohghhg'
        },
    });

    transporter.sendMail({
        to: 'Fezco0963@gmail.com',
        subject: 'Interested on this property',
        html: `<h3>${textMessage}</h3>
                <br/>
                click the link below to login in and see tenants full deatils
                <a class="nav-link" href="http://localhost:3000/LogIn">Bitprop</a>  `

    }).then(()=>{
        console.log("Email Sent")
    }).catch(err=>{
        console.error(err)
    })
    res.redirect(`/propertyDetails/${propertyNumber}`)

})









module.exports =router;