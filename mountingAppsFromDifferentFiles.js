"use strict";
let mount = require('koa-mount');
let koa = require('koa');
let app = koa();

let helloApp = require('./subapps/hello.js');
let worldApp = require('./subapps/world.js');

app.use(mount('/hello', helloApp));
app.use(mount('/world', worldApp));

app.listen(3000);
console.log('listening on port 3000');