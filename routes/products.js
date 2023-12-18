const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.route('/').get(productController.getProducts)
    

module.exports = router;
