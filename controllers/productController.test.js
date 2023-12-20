const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Product = require('../models/Product');
const app = express();
const {
  getProducts,
  getSingleProduct,
  createProduct,
} = require('./productController'); 

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

beforeEach(async () => {
  await Product.deleteMany({});
});

describe('Product Controller Tests', () => {
  it('should get all products', async () => {
    // Create test data
    const testData = [{ name: 'Test Product 1' }, { name: 'Test Product 2' }];
    await Product.create(testData);

    const response = await request(app).get('/products');

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.count).toBe(testData.length);
    expect(response.body.products.length).toBe(testData.length);
  });

  it('should get a single product', async () => {
    // Create test data
    const testProduct = await Product.create({ name: 'Test Product' });

    const response = await request(app).get(`/products/${testProduct._id}`);

    expect(response.status).toBe(200);
    expect(response.body.product).toEqual(expect.objectContaining({ name: 'Test Product' }));
  });

  it('should create a product', async () => {
    const newProduct = { name: 'New Product' };

    const response = await request(app).post('/products').send(newProduct);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.product).toEqual(expect.objectContaining(newProduct));
  });
});
