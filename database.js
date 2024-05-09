const sqlite3 = require ('sqlite3').verbose()
const dbName = 'myDatabase.db'


db = new sqlite3.Database(dbName,(err) =>{

    if(err){
        console.log(err.message);
    }
    else{
        //console.log("Connected to the Database")
        db.run('CREATE TABLE IF NOT EXISTS Tenants (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Email TEXT, contactNumber TEXT, textMessage TEXT)',(err) => {
            if(err){
                console.error(err.message);
            }
            else{
                console.log("Tenants.. Table created or existed")
            }
        })
        db.run('CREATE TABLE IF NOT EXISTS Agents (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Surname TEXT, contactNumber TEXT,Email TEXT ,Photo TEXT,ListofProperties TEXT)',(err) => {
            if(err){
                console.error(err.message);
            }
            else{
                console.log("Agent.. Table created or existed")
            }
        })
        db.run('CREATE TABLE IF NOT EXISTS PropertyDetails (id INTEGER PRIMARY KEY AUTOINCREMENT, Price TEXT,Address TEXT,Features TEXT,Description TEXT ,PropertyType TEXT,Photos TEXT)',(err) => {
            if(err){
                console.error(err.message);
            }
            else{
                console.log("PropertyDetails Table created or existed")
            }
        })
        
    }
})
    

