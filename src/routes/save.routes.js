const { Router } = require('express');
const router = Router();

const { saveData } = require('../controllers/save.controller')

router.post('/save', saveData);

module.exports = router;