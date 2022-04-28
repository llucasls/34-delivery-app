const { Router } = require('express');

const usersController = require('../controllers/Users');

const router = Router();

router.get('/sellers', usersController.getSellers);
router.get('/:id', usersController.getUser);

module.exports = router;