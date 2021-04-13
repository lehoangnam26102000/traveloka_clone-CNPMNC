const mongoose=require("mongoose");
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/DB_Traveloka',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Access Successed");
    }catch(exception){
        console.log("Access Denied");
    }
}

module.exports={connect};