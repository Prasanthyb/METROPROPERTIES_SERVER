const { getProducts } = require('./featuredController');
const Featured = require('../models/Featured');
const CustomError = require('../utilities/CustomError');

jest.mock('../models/Featured');

describe('getProducts', () => {
  it('should get all products and return them in the response', async () => {
    const mockProducts = [{ name: 'Product 1' }, { name: 'Product 2' }];
    Featured.find.mockResolvedValue(mockProducts);

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    await getProducts(null, mockResponse);

    expect(Featured.find).toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: true,
      count: mockProducts.length,
      products: mockProducts
    });
  });

  it('should handle the case when no products are found', async () => {
    Featured.find.mockResolvedValue([]);

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    await getProducts(null, mockResponse);

    expect(Featured.find).toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      error: 'Something went wrong, try again later.'
    });
  });

  it('should handle unexpected errors and return a 500 status', async () => {
    Featured.find.mockRejectedValue(new Error('Unexpected error'));

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    await getProducts(null, mockResponse);

    expect(Featured.find).toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: false,
      error: 'Something went wrong, try again later.'
    });
  });
});
