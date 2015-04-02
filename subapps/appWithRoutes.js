"use strict";
let koa = require('koa');
let route = require('koa-route');
let app = module.exports = koa();

app.use(route.get("/", index));
app.use(route.get("/user/:name", user));

function *index() {
	this.body = "You are on the index of the sub app";
};

function *user(name) {
	this.body = `The name of the user is ${name}`;
};

