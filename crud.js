
//Here we are initially information tou database
//This information includes propeties deatails and angencies
//This will allow Admin and Agenccies to have certain privilege to the system


const sqlite3 = require ('sqlite3').verbose()

db = new sqlite3.Database('./myDatabase.db',sqlite3.OPEN_READWRITE,(err)=>{
    if(err) return console.error(err)
})

const createAgent = (Name,Surname,contactNumber,Email,ListofProperties,callback) =>{

    const sql = `INSERT INTO Agents (Name,Surname,contactNumber,Email,ListofProperties) VALUES (?,?,?,?,?)`
    db.run(sql,[Name,Surname,contactNumber,Email,ListofProperties],function(err){
        callback(err,{id: this.lastID})
    })
}
const createPropertyDetails = (Number,Price,Address,Features,Description,PropertyType,Photos,callback) =>{

    const sql = `INSERT INTO PropertyDetails (Number,Price,Address,Features,Description,PropertyType,Photos) VALUES (?,?,?,?,?,?,?)`
    db.run(sql,[Number,Price,Address,Features,Description,PropertyType,Photos],function(err){
        callback(err,{id: this.lastID})
    })
}

createAgent("Keith","Samuel","0794424126" ,"keithsamuel70test1@gmail.com","2,8,4,10,6",(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Agent 1 Personal details stored to database")
    }
})

createAgent("Fenzile","Daidoo","0894724120" ,"Fezco0963@gmail.com","1,9,7,5,3",(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Agent 2 Personal details stored to database")
    }
})

createPropertyDetails("1","R3200","iLitha Park, Khayelitsha",
    `"Bedroom" :"8","Shower" :"3","ParkingLot": "1","landArea":"45m","Unfurnished":"Yes","Pool":"Yes","Pets":"Yes"`,
    `A sensational single-level home with a sunny north-facing garden and large under-cover patio
     perfect for seamless indoor-outdoor living. The double garage leads directly into 
    the entrance area and the gourmet open plan kitchen serves the well-proportioned dining 
    and living areas. `,"Flat",
    `P1_Outside.JPG`,(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Property Details Stored to database")
    }
})
createPropertyDetails("2","R6000","Kenilworth Upper, Cape Town",
    `"Bedroom" :"2","Shower" :"2","ParkingLot": "2","landArea":"50m","Unfurnished":"No","Pool":"Yes","Pets":"No"`,
    `This gorgeous 4th floor unit comes with 2 bedrooms both with ensuite bathrooms (one with bathtub and 1 with shower),
    a laundry nook with space for both a washer and dryer and open plan living so you can keep an eye on the little ones while 
    you enjoy your modern kitchen which has space for a dishwasher and plenty of cupboard space.. `,"Flat",
    `P2_Outside.JPG`,(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Property Details Stored to database")
    }
})
createPropertyDetails("3","R7500","185 Stellenberg Road",
    `"Bedroom" :"2","Shower" :"2","ParkingLot": "1","landArea":"35","Unfurnished":"Yes","Pool":"No","Pets":"No"`,
    `Are you looking for a 2 bedroom simplex in Equestria with a private garden and Fibre ready? Look
     no further this might be for you, 2 bedrooms carpeted with build-in cupboards, 1 full bathroom 
     (bath, basin, shower, and toilet) A spacious kitchen with build-in and connections for appliances.
      A single garage with tip-up door and access into the lounge, A comfortable lounge tiled with sliding doors 
      leading to a patio with build-in braai and private garden. `,"Flat",
    `P3_Outside.JPG`,(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Property Details Stored to database")
    }
})

createPropertyDetails("4","R5500","Avenue Mowbray Road",
    `"Bedroom" :"5","Shower" :"2","ParkingLot": "1","landArea":"35","Unfurnished":"No","Pool":"Yes","Pets":"No"`,
    `Situated in a secured complex with 24 -hour security, moments away from large shopping malls and on the doorstep 
    of the Waltloo industrial area with quick access to the freeway. This unit offers a large living area, separate kitchen,
     3 well proportioned bedrooms, 2 bathrooms, lock up garage and a carport. `,"Flat",
    `P4_Outside.JPG`,(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Property Details Stored to database")
    }
})
createPropertyDetails("5","R5500","Obz square Mowbray",
    `"Bedroom" :"3","Shower" :"2","ParkingLot": "1","landArea":"47","Unfurnished":"Yes","Pool":"No","Pets":"No"`,
    `Are you looking for a 2 bedroom simplex in Equestria with a private garden and Fibre ready? Look
     no further this might be for you, 2 bedrooms carpeted with build-in cupboards, 1 full bathroom 
     (bath, basin, shower, and toilet) A spacious kitchen with build-in and connections for appliances.
      A single garage with tip-up door and access into the lounge, A comfortable lounge tiled with sliding doors 
      leading to a patio with build-in braai and private garden. `,"Flat",
    `P5_Outside.JPG`,(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Property Details Stored to database")
    }
})
createPropertyDetails("6","R4500","Century City",
    `"Bedroom" :"2","Shower" :"2","ParkingLot": "1","landArea":"45","Unfurnished":"Yes","Pool":"No","Pets":"No"`,
    `Are you looking for a 2 bedroom simplex in Equestria with a private garden and Fibre ready? Look
     no further this might be for you, 2 bedrooms carpeted with build-in cupboards, 1 full bathroom 
     (bath, basin, shower, and toilet) A spacious kitchen with build-in and connections for appliances.
      A single garage with tip-up door and access into the lounge, A comfortable lounge tiled with sliding doors 
      leading to a patio with build-in braai and private garden. `,"Flat",
    `P6_Outside.JPG`,(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Property Details Stored to database")
    }
})
createPropertyDetails("7","R6500","Wynberg Rondebosch",
    `"Bedroom" :"2","Shower" :"2","ParkingLot": "2","landArea":"55","Unfurnished":"Yes","Pool":"No","Pets":"No"`,
    `This lovely two-bedroom, Two-Bath Townhouse is in a secure and well-maintained complex. It has an open-plan 
    living room, dining area, storage area, patio, and a guest toilet with a shower downstairs. The upstairs has 
    two spacious bedrooms with built-in cupboards and a separate bathroom and toilet. `,"Flat",
    `P7_Outside.JPG`,(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Property Details Stored to database")
    }
})
createPropertyDetails("8","R8500","Manhattan Flats, Cape Town ",
    `"Bedroom" :"2","Shower" :"1","ParkingLot": "1","landArea":"45","Unfurnished":"Yes","Pool":"No","Pets":"No"`,
    `This beautiful 2 bedroom townhouse is on the 1st floor of a security complex. It offers an open plan kitchen and 
    living room with a private balcony. The kitchen is equipped with built-in cupboards and a gas stove. Full bathroom 
    with a shower. Built in cupboards in both the bedrooms. The complex offers a playground for kids communal braai and picknic facilities `,"Flat",
    `P8_Outside.JPG`,(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Property Details Stored to database")
    }
})
createPropertyDetails("9","R5580","185 Fouways Johannesburg",
    `"Bedroom" :"2","Shower" :"2","ParkingLot": "1","landArea":"60","Unfurnished":"Yes","Pool":"No","Pets":"No"`,
    `Spacious 2 bedroom townhouse apartment is within a security estate. If offers open plan living with built in cupboards 
    in the kitchen and both the bedrooms. The complex offers a playground for kids and communal braai and picknic facilities 
    and a communal swimming pool. Surveillance cameras through out the complex and guards on duty 24 /7. The complex is only 12km 
    from Rosslyn 7 km from TUT and 10 km from Pta cbd `,"Flat",
    `P9_Outside.JPG`,(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Property Details Stored to database")
    }
})
createPropertyDetails("10","R7500","185 Stellenberg Road",
    `"Bedroom" :"2","Shower" :"2","ParkingLot": "1","landArea":"35","Unfurnished":"Yes","Pool":"No","Pets":"No"`,
    `Are you looking for a 2 bedroom simplex in Equestria with a private garden and Fibre ready? Look
     no further this might be for you, 2 bedrooms carpeted with build-in cupboards, 1 full bathroom 
     (bath, basin, shower, and toilet) A spacious kitchen with build-in and connections for appliances.
      A single garage with tip-up door and access into the lounge, A comfortable lounge tiled with sliding doors 
      leading to a patio with build-in braai and private garden. `,"Flat",
    `P10_Outside.JPG`,(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("Property Details Stored to database")
    }
})


