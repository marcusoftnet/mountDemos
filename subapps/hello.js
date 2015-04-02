var koa = require('koa');
var app = module.exports = koa();

app.use(function *(next){
  yield next;
  this.body = 'Hello';
});