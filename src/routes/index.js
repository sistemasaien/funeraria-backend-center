const { Router } = require('express');
const router = Router();
const { getConnectionData } = require('../controllers');


router.get('/getConnectionData/:nombre', getConnectionData);

module.exports = router;