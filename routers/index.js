const express = require('express');
const foodsRouter = require('./foods');
const ordersRouter = require('./orders');
const usersRouter = require('./users');

const router = express.Router();
router.use('/api/v1/orders', ordersRouter);
router.use('/api/v1/menu', foodsRouter);
router.use('/api/v1/users', usersRouter);

module.exports = router;