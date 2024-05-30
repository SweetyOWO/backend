const categoriesRouter = require('express').Router();
const {findAllCategories,checkIsCategoryExists, createCategory, updateCategory, checkEmptyName, deleteCategory} = require('../middlewares/categories');
const {sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
const { checkAuth } = require("../middlewares/auth.js");

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post('/categories', findAllCategories, checkAuth,checkIsCategoryExists, createCategory, sendCategoryCreated)
categoriesRouter.put('/categories/:id',findAllCategories, checkAuth, checkEmptyName,checkIsCategoryExists, updateCategory, sendCategoryUpdated)
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
