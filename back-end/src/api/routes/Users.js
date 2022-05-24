const { Router } = require('express');

const { validateAdmin } = require('../middlewares');

const usersController = require('../controllers/Users');

const router = Router();

router.get('/sellers', usersController.getSellers);
router.get('/:id', usersController.getUser);
router.get('/', validateAdmin, usersController.getAllUsers);
router.delete('/:email', validateAdmin, usersController.deleteUser);

module.exports = router;