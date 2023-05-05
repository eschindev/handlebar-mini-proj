const router = require('express').Router();
const apiRoutes = require('./api');
const profileRoutes = require('./profileRoutes.js');

router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);

module.exports = router;
