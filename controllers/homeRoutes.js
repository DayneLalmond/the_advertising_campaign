//got this from mini proj, it properly connects the data to the tables or something
const router = require('express').Router();
const { Ad, User } = require('../models');
const withAuth = require('../utils/auth');

module.exports = router;