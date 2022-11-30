//Imports
  
let brandsModel = require('../models/brands.model');
let productsModel = require('../models/products.model');

//exporst
module.exports = {
    /**Controller Function */

    postListbrands: async (req,res,next) =>{
        try {
            const data = await brandsModel.find();
            return res.json({
                status:1,
                data:data
            })
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    postListproucts:async(req,res,next) =>{
        try {
            const data = await productsModel.find();
            return res.json({
                status:1,
                data:data
            })
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
}