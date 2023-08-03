const { default: mongoose } = require('mongoose');
const mogoose = require('mongoose');


const ItemSchema = new mogoose.Schema({
    name:{
        type: String ,
        requied: true
    },
    price:{
        type: Number ,
        requied: true
    },
    url:{
        type: String ,
        requied: true
    }
});


const itemModel = mongoose.model( 'dishes' , ItemSchema )
module.exports = itemModel