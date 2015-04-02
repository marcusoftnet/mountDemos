"use strict";
let mount = require('koa-mount');
let koa = require('koa');
let app = koa();

let subApp = require('./subapps/appWithRoutes.js');
app.use(mount('/subapp', subApp));
app.use(mount('/sub/app/and/a/very/deep/path', subApp));

app.listen(3000);
console.log('listening on port 3000');