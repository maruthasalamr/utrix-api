var mongoose = require('mongoose');
var schema =  mongoose.Schema;

var brandschema =  new schema({
    brand_id:{
        type : Number
    },
    brand_name : {
        type : String
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

module.exports = mongoose.model('brands',brandschema, 'brands');