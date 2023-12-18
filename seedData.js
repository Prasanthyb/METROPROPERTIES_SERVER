const dotenv = require('dotenv');
const fs = require('fs');
const colors = require('colors');
const db = require('./config/db');

// Load ENV variables
dotenv.config({ path: './config/config.env' });

// Load Models
const Product = require('./models/Product');
const Featured = require('./models/Featured');
const New = require('./models/New');
const Recent = require('./models/Recent');

// Connect to Mongo Database
const dbConnection = db.connectToDatabase();

// Read The JSON files
const products = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/products.json`, 'utf-8'));
const featureds = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/featured.json`, 'utf-8'));
const news = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/new.json`, 'utf-8'));
const recents = JSON.parse(fs.readFileSync(`${__dirname}/_seedData/recent.json`, 'utf-8'));

// Import Sample Data In DB for Product
const importProductData = async () => {
    try {
        await Product.create(products);
        console.log(`Product data successfully imported`.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

// Import Sample Data In DB for Featured
const importFeaturedData = async () => {
    try {
        await Featured.create(featureds);
        console.log(`Featured data successfully imported`.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

// Import Sample Data In DB for New
const importNewData = async () => {
    try {
        await New.create(news);
        console.log(`New data successfully imported`.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

// Import Sample Data In DB for Recent
const importRecentData = async () => {
    try {
        await Recent.create(recents);
        console.log(`Recent data successfully imported`.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

// Delete all data from DB for Product
const deleteProductData = async () => {
    try {
        await Product.deleteMany({});
        console.log(`Product data successfully deleted`.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

// Delete all data from DB for Featured
const deleteFeaturedData = async () => {
    try {
        await Featured.deleteMany({});
        console.log(`Featured data successfully deleted`.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

// Delete all data from DB for New
const deleteNewData = async () => {
    try {
        await New.deleteMany({});
        console.log(`New data successfully deleted`.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

// Delete all data from DB for Recent
const deleteRecentData = async () => {
    try {
        await Recent.deleteMany({});
        console.log(`Recent data successfully deleted`.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

// Handle command-line arguments
const command = process.argv[2];

switch (command) {
    case 'start':
        nodemon('./bin/www');
        break;
    case 'import-product':
        importProductData().then();
        break;
    case 'import-featured':
        importFeaturedData().then();
        break;
    case 'import-new':
        importNewData().then();
        break;
    case 'import-recent':
        importRecentData().then();
        break;
    case 'delete-product':
        deleteProductData().then();
        break;
    case 'delete-featured':
        deleteFeaturedData().then();
        break;
    case 'delete-new':
        deleteNewData().then();
        break;
    case 'delete-recent':
        deleteRecentData().then();
        break;
    default:
        console.log('Invalid command. Use start, import-product, import-featured, import-new, import-recent, delete-product, delete-featured, delete-new, or delete-recent.');
        process.exit(1);
}
