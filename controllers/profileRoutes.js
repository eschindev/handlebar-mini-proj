const router = require('express').Router();
const { User, Project } = require('../models');
const withAuth = require('../utils/auth.js');

router.get('/', withAuth, async (req, res) => {
    try {
        const profileData = await User.findByPk(req.session.userId, {
            include: {
                model: Project
            }
        });

        if (!profileData) {
            res.redirect('/');
            return;
        }

        const profile = profileData.get({ plain: true });

        res.render('profile', { profile });
    } catch (err) {
        res.status(500).json(err);
    }
});