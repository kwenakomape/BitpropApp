//Here I'm seeting up the routes

//require any neccesary  modules
var nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();
const sqlite3 = require ('sqlite3').verbose();
const emailjs = require('@emailjs/nodejs');

// connect to my sql database

db = new sqlite3.Database('./myDatabase.db',sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err)
})

// route for displaying home page

router.get('/',async (req, res,callback) => {
    
    const sql = `SELECT * FROM PropertyDetails`;
    await db.all(`SELECT * FROM PropertyDetails`, function(err, rows) {
        if(err){
            console.log(err.message)
        }
        else{
            res.render('index',{rows});
        }
     });
    
})

// route for showing all the available properties

router.get('/propertyDetails/:id',async (req, res) => {

    var number = String(req.params.id)
    
    await db.all(`SELECT * FROM PropertyDetails WHERE Number = ${number}`, function(err, rows) {
        if(err){
            console.log(err.message)
        }
        else{
        
            res.render('propertyDetails',{rows});
        }
     });

})

//route for Agent/Admin to log into the system

router.get('/LogIn', (req, res) => {
    res.render('LogIn');
})

// authenticating the user, only Agent and Admins have access to this infromation

router.post('/tenantsDetails', async(req, res) => {
   
    const {email,password} = req.body

    let redirectUrl = 'LogIn'

    if(email==="keithsamuel70test1@gmail.com" || "Fezco0963@gmail.com"){
        if(password==="54656"){
           
            redirectUrl = 'tenantsDetails'
        }
    }

    await db.all(`SELECT * FROM Tenants`, function(err, rows) {
        if(err){
            
            console.log(err.message)
        }
        else{
            res.render(redirectUrl,{rows});
        }
        

     });
    

})

// Shows all the important information about tenants
router.get('/tenantsDetails', (req, res) => {

    res.render('tenantsDetails');
    
})

//Show full details about tenant's interest

router.get('/tenantInterest/:id',async (req, res) => {
    var number = String(req.params.id)
    
   
    await db.all(`SELECT * FROM PropertyDetails WHERE Number = ${number}`, function(err, rows) {
        if(err){
            console.log(err.message)
        }
        else{
        
            res.render('tenantInterest',{rows});
        }
     });

})


//Show All agencies working across Bitprop properties

router.get('/ShowAgencies', async(req, res) => {

    await db.all(`SELECT * FROM Agents`, function(err, rows) {
        if(err){
            
            console.log(err.message)
        }
        else{
            res.render('ShowAgencies',{rows});
        }
        

     });

    
})

// Send the Tenants details to the database

router.post('/Register', (req, res,callback) => {

    const {Name,Email,contactNumber,textMessage,propertyNumber} = req.body
   
    const sql = `INSERT INTO Tenants (Name,Email,contactNumber,textMessage,propertyNumber) VALUES (?,?,?,?,?)`
    db.run(sql,[Name,Email,contactNumber,textMessage,propertyNumber],function(err){
        callback(err,{id: this.lastID})
    })
    
    let toEMail = ""
    if(parseInt(propertyNumber)%2==0){
        toEMail = 'keithsamuel70test1@gmail.com'
    }else{
        toEMail ='Fezco0963@gmail.com'
    }

    //send email to the agent you like the property

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: 'tenant392@gmail.com',
            pass: 'goqy azrf iuer aiiu'
        },
    });

    
    transporter.sendMail({
        
        to: toEMail,
        subject: 'Interested on this property',
        html: ` <h3>Hi my this is ${Name} </h3>
                <h3>${textMessage}</h3>
                <br/>
                click the link below to login in and see tenants full deatils
                <a class="nav-link" href="http://localhost:3000/LogIn">Bitprop</a> 
                
                <br>
                <br>
                <h5> Kind Regards</h>
                <p> ${Name}</p>
                <h5> This email comes from Bitprop website</h>
                `

    }).then(()=>{
        console.log("Email Sent")
    }).catch(err=>{
        console.error(err)
    })
    res.redirect(`/propertyDetails/${propertyNumber}`)

})

module.exports =router;