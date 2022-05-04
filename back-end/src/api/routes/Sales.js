const { Router } = require('express');

const { salesController } = require('../controllers');
const { validateSale, validateEditSale } = require('../middlewares');

const router = Router();

router.get('/', salesController.getAll);
router.get('/:id', salesController.getById);
router.post('/', validateSale, salesController.create);
router.patch('/:id', validateEditSale, salesController.update);

module.exports = router;