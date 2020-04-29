// import express from "express";
const express = require("express");
// import user from "../controller/UserController";
const user = require("../controller/UserController");
const route = express.Router();

route.get('/user', user.getUser);
route.get('/users', user.getAllUsers); 

route.get('/user/signup', user.signup);
route.post('/user/add',user.addUser);
route.post('/register',user.register);

// export default route;
module.exports = route;