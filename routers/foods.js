const express = require('express');
const foodController = require('../controllers/foods');

const foodsRouter = express.Router();

foodsRouter.post('/', foodController.addFood);
foodsRouter.get('/', foodController.getMenu);
foodsRouter.delete('/:id', foodController.deleteFood);
foodsRouter.patch('/:id', foodController.updateFood);

module.exports = foodsRouter;