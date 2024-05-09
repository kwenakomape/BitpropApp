const {createTenant} = require('../crud')

createTenant("thami","kwen@gmail.com","549874","hey there",(err,data) => {

    if(err){
        console.error(err.message);
    }
    else{
        console.log("message sent")
    }
})