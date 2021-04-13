var express = require('express');
var router = express.Router();

const hotelController=require('../app/controllers/HotelControllers');

router.get('/hotel',hotelController.index);

module.exports=router;