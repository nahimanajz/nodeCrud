import express from "express";
import user from "../controller/UserController";
const route = express.Router();

route.get('/:id', user.getUser)
route.get('/user/signup', user.signup);
route.post('/user/add',user.addUser);
route.post('/register',user.register);

export default route;