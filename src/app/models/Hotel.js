const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Hotel = new Schema({
    name: { type: String, minLength:2 },
    type: { type: String, minLength:2 },
    address: { type: String, minLength:2 },
    rate: { type:String, minLength:2 },
    image: { type:String, minLength:2}
  });

  module.exports=mongoose.model('hotel', Hotel);