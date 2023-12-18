const express = require('express');
const router = express.Router();
const recentController = require('../controllers/recentController');

router.route('/').get(recentController.getProducts)
    

module.exports = router;
