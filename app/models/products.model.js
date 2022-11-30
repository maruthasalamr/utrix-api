var mongoose = require('mongoose');
var schema =  mongoose.Schema;

var productschema =  new schema({

    product_id:{
       type:Number
    },
    product_name : {
        type : String
    },
    product_code : {
        type : String
    },
    product_price : {
        type:Number
    },
    created:{
        type:Date,
        default: Date.Now
    },

    updated:{
        type:Date,
        default: Date.Now
    }
})

module.exports = mongoose.model('products',productschema, 'products')