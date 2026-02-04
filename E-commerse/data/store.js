let products = [];
let productIdCounter = 1;

module.exports = {
  products,
  getNextId: () => productIdCounter++,
};
