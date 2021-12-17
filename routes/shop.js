const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getIndex);

router.get('/cart', productsController.getCart);

router.get('/products', productsController.getProducts);

router.get('/checkout');


module.exports = router;
