const router = require('express').Router();
const { Project } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create({
      name: req.body.projectName,
      description: req.body.projectDescription,
      date_created: req.body.projectCreated,
      needed_funding: req.body.projectFunding,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const projectid = await Project.findByPk(req.params.id, {});

    if (!projectid) {
      res.status(404).json({ message: 'Project Not Found' });
      return;
    }

    res.status(200).json(projectid);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
