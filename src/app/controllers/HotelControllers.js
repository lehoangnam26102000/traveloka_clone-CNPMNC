const Hotel=require('../models/Hotel');
const { multipleMongooseToObject }=require('../../ultil/mongoose')

class HotelController{
    index(req,res,next){
        Hotel.find({})
        .then(hotels => {
          res.render('hotel',{Hotel:multipleMongooseToObject(hotels)}) 
        })
        .catch(err => next(err));
    }
}

module.exports=new HotelController();