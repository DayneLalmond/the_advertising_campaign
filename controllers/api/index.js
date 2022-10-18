
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const adRoutes = require('./adRoutes');

router.use('/users', userRoutes);
router.use('/ads', adRoutes);

module.exports = router;