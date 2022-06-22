const express = require('express');
const orderController = require('../controllers/orders');

const ordersRouter = express.Router();

ordersRouter.get('/', orderController.getOrders);
ordersRouter.post('/', orderController.addOrder);
ordersRouter.get('/change/:id', orderController.changeState);
ordersRouter.get('/accepted', orderController.acceptedOrders);
ordersRouter.get('/state/:id', orderController.orderState);
ordersRouter.get('/end/:id', orderController.endOrder);
ordersRouter.get('/transactions', orderController.getTransactions);

module.exports = ordersRouter;