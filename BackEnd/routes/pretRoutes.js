// routes/pretRoutes.js
const express = require('express');
const router = express.Router();
const pretController = require('../controllers/pretController');

router.get('/', pretController.getAll);
router.post('/', pretController.createPret);
router.put('/:id', pretController.updatePret);
router.delete('/:id', pretController.deletePret);
router.get('/pretsDetails', pretController.getPretsDetails);
router.get('/livrePrets', pretController.getLivrePrets);

module.exports = router;


