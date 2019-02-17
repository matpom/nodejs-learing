// ES5 constructor function
// module.exports = function Product() {};

const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const productsFile = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = cb => {
  fs.readFile(productsFile, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
}
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(productsFile, JSON.stringify(products), err => {
        if (err) {
          console.log('Unable to save products', err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
