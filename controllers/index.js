const router = require('express').Router();
const apiRoutes = require('./api');
const profileRoutes = require('./profileRoutes.js');
const homeRoutes = require('./homeRoutes.js');

router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
router.use('/', homeRoutes);

module.exports = router;
