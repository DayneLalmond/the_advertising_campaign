const router = require('express').Router();
const { Ad, User } = require('../models');

const apiRoutes = require('./api');
const homeRoutes = require('./html');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;