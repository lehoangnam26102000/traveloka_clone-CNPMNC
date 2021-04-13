const hotelRouter = require('./hotel');

function route(app){
    app.use('/',hotelRouter);
}

module.exports= route;