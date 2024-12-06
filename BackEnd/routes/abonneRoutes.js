// routes/abonneRoutes.js
const express = require('express');
const router = express.Router();
const abonneController = require('../controllers/abonneController');

router.get('/', abonneController.getAll);
router.get('/:nom', abonneController.getOne);
router.post('/', abonneController.create);
router.put('/:id', abonneController.update);
router.delete('/:id', abonneController.delete);

module.exports = router;


