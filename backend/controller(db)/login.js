const db = require("./connection");
//need to add exception handling
//to find existing user in db
function findOne(userEmail, callbacks) {
    
    const email=userEmail;
    db.connect((err)=>{
        if(err){
            return err;
        }else{
            db.query("SELECT adminEmail, adminPassowrd FROM admin WHERE adminEmail = ?",[email], (err, data, fields)=>{
                if(err){
                    return err;
                }else{
                    if(data.length!==0){
                        console.log(data[0].adminEmail)
                        callbacks(data[0])
                    }else{
                        return [{}];
                    }
                }
            })
        }
    })

}
module.exports = findOne;