const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos.controller');

router.get('/', todosController.get);

module.exports = router;