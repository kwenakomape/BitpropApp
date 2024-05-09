
function sendMail(Name,Email,textMessage){

    let params = {
        tenantName : Name,
        email : Email,
        message: textMessage
    
    }
    emailjs.send("service_lmkozy5","template_i8ztg1e",params).then(alert("message Sent"))
    
}

module.exports = {sendMail}


