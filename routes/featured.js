const express = require('express');
const router = express.Router();
const featuredController = require('../controllers/featuredController');

router.route('/').get(featuredController.getProducts)
    

module.exports = router;
