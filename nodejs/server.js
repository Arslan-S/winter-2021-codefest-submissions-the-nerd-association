const mongoose = require('mongoose');

//will connect to Mongodb
mongoose.server('mongodb://localhost/test');
mongoose.server.once('open',function(){
    console.log('connection has been made');
}).on('error', function(error){
    console.log('error', error);
});