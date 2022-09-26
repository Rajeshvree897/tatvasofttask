const mongoose = require('mongoose')
async function mainConnection(){
   await mongoose.connect("mongodb+srv://tatvasoft:12345@cluster0.it8ym.mongodb.net/?retryWrites=true&w=majority", (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Connection Done");
            }
    })

}
mainConnection()