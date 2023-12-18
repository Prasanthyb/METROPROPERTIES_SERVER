const New = require('../models/New');
const CustomError = require("../utilities/CustomError");


// ~~~~~~~~~~~~~GET ALL PRODUCTS FROM products COLLECTION~~~~~~~~~~~~~~~

const getProducts = async (req, res) => {
  try {
    const prod = await New.find({});
    if (!prod || prod.length === 0) {
      const error = new CustomError(`Something went wrong, try again later.`, 500);
      return res.status(error.statusCode).json({
        success: false,
        error: error.message
      });
    }
    res.status(200).json({
      success: true,
      count: prod.length,
      products: prod
    });
  } catch (error) {
    // Handle any unexpected errors
    console.error(error);
    const customError = new CustomError(`Something went wrong, try again later.`, 500);
    res.status(customError.statusCode).json({
      success: false,
      error: customError.message
    });
  }
};
module.exports = { getProducts };