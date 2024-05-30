const userRouter = require('express').Router();
const { findAllUsers,checkEmptyNameAndEmailAndPassword, createUser, updateUser, checkEmptyNameAndEmail, deleteUser, hashPassword, checkIsUserExists } = require('../middlewares/users')
const { sendAllUsers, sendUserCreated, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users');
const { checkAuth } = require("../middlewares/auth.js");

userRouter.get('/users', findAllUsers, sendAllUsers);
userRouter.post('/users', checkAuth, findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, hashPassword, createUser, sendUserCreated);
userRouter.put('/users/:id', checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated)
userRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
userRouter.get("/me", checkAuth, sendMe);

module.exports = userRouter;
