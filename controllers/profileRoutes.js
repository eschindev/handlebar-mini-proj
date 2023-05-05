const router = require('express').Router();
const { User, Project } = require('../models');
const withAuth = require('../utils/auth.js');

router.get('/', withAuth, async (req, res) => {
  try {
    const profileData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ['password'],
      },
      include: {
        model: Project,
      },
    });

    if (!profileData) {
      res.redirect('/');
      return;
    }

    const profile = profileData.get({ plain: true });

    // response for testing
    // res.status(200).json(profile);
    res.render('profile', { profile });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
