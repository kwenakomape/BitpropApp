
const sqlite3 = require ('sqlite3').verbose()

db = new sqlite3.Database('./myDatabase.db',sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err)
})
// const {db} = require('./database')



//CREATE

const createTenant = (Name,Email,contactNumber,textMessage,callback) =>{

    const sql = `INSERT INTO Tenants (Name,Email,contactNumber,textMessage) VALUES (?,?,?,?)`
    db.run(sql,[Name,Email,contactNumber,textMessage],function(err){
        callback(err,{id: this.lastID})
    })
}
const createAgent = (Name,Surname,contactNumber,Email,Photo,ListofProperties,callback) =>{

    const sql = `INSERT INTO Agents (Name,Surname,contactNumber,Email,Photo,ListofProperties) VALUES (?,?,?,?,?,?)`
    db.run(sql,[Name,Surname,contactNumber,Email,Photo,ListofProperties],function(err){
        callback(err,{id: this.lastID})
    })
}
const createPropertyDetails = (Price,Address,Features,Description,PropertyType,Photos,callback) =>{

    const sql = `INSERT INTO PropertyDetails (Price,Address,Features,Description,PropertyType,Photos) VALUES (?,?,?,?,?,?)`
    db.run(sql,[Price,Address,Features,Description,PropertyType,Photos],function(err){
        callback(err,{id: this.lastID})
    })
}
// const readAgents = (callback) =>{

//     const sql = `SELECT * FROM Agents`;
//     db.all(sql,[],callback)
// }

// //UPDATE

// const updateAgent = (id,Name,Surname,contactNumber,callback) =>{
//     const sql = `UPDATE Agent SET name = ?, Surname = ? contactNumber =? WHERE id = ?`
//     db.run(sql,[Name,Surname,contactNumber,id],callback)
// }

// //DELETE 

// const deleteAgent = (id,callback)=>{
//     const sql = `DELETE FROM Agents WHERE id = ?`
//     db.run(sql, id,callback)
// }


createAgent("Keith","Samuel","079442412" ,"kwenakomape2@gmail.com","link","10,6,8,1,9",(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Agent 1 Personal details stored to database")
    }
})

createAgent("John","Gain","0894724120" ,"kwenakomape2@gmail.com","link","2,4,5,3,10",(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Agent 2 Personal details stored to database")
    }
})

createPropertyDetails("R3200","iLitha Park, Khayelitsha",
    `"Shower" :"1","ParkingLot": "1","landArea":"45m","Unfurnished":"Yes","Pool":"Yes","Pets":"Yes"`,
    `A sensational single-level home with a sunny north-facing garden and large under-cover patio
     perfect for seamless indoor-outdoor living. The double garage leads directly into 
    the entrance area and the gourmet open plan kitchen serves the well-proportioned dining 
    and living areas. The three oversized bedrooms are modern, light, and bright with crisp 
    white fitted mediterranean shutters. A magnificent communal pool with direct private access 
    from the garden`,"Flat",
    `"photo1" :"link1","photo2" :"link2","photo3" :"link3","photo4" :"link4","photo5" :"link5"}`,(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Property Details Stored to database")
    }
})
// let name = "kwena"
// module.exports = {createAgent,createTenant,readAgents,updateAgent,deleteAgent}

module.exports = {createAgent}