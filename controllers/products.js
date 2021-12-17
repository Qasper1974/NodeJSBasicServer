const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};

exports.getAllProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('admin/products.ejs', {
        prods: products,
        pageTitle: 'Admin All Products',
        path: '/admin/products',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
  };
  
  exports.getIndex = (req, res, next) => {
      res.render('shop/index.ejs',{
        pageTitle: 'Welcome Page',
        path: '/',
        activeShop: true,
        productCSS: true
      });
  };
  
  exports.getCart = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/cart.ejs', {
        prods: products,
        pageTitle: 'Cart',
        path: '/cart',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    });
  };
  
