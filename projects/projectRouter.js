const db = require(`../data/helpers/projectModel`);
const dbTwo = require(`../data/helpers/actionModel`);
const router = require("express").Router();

router.get(`/`, (req, res) => {
  db.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The projects information could not be retrieved." });
    });
});

router.get(`/:id`, (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The project information could not be retrieved." });
    });
});

router.post(`/`, (req, res) => {
  db.insert(req.body)
    .then(newPost => {
      res.status(200).json(newPost);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The projects information could not be added." });
    });
});

router.put(`/:id`, (req, res) => {
  const update = req.body;
  const overwrite = req.params.id;

  db.update(overwrite, update)
    .then(updatedProject => {
      res.status(200).json(updatedProject);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The projects information could not be updated." });
    });
});

router.delete(`/:id`, (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The projects information could not be deleted." });
    });
});

router.get(`/:id/actions`, (req, res) => {
  const id = req.params.id;
  db.getProjectActions(id)
    .then(projectActions => {
      res.status(200).json(projectActions);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The projects actions could not be retrieved." });
    });
});

router.post(`/:id/actions`, (req, res) => {
  dbTwo
    .insert(req.body)
    .then(newAction => {
      res.status(200).json(newAction);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The actions information could not be created." });
    });
});

module.exports = router;
