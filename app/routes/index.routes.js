module.exports = app =>{
    const index001 = require('../controllers/index.app.controller_001');


    app.post('/api/list_brands', index001.postListbrands);
    app.post('/api/list_products',index001.postListproucts);
}