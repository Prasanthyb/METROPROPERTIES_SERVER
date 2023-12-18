const express = require('express');
const router = express.Router();
const newController = require('../controllers/newController');

router.route('/').get(newController.getProducts)
    

module.exports = router;
