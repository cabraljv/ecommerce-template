const routes = require('next-routes');

module.exports = routes()
  .add('/', 'home')
  .add('/product/:productId', 'product');
