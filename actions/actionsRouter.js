const db = require(`../data/helpers/actionModel`);
const router = require("express").Router();

router.get(`/`, (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The actions information could not be retrieved." });
    });
});

router.get(`/:id`, (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The actions information could not be retrieved." });
    });
});

router.put(`/:id`, (req, res) => {
  const updateMe = req.params.id;
  const newAction = req.body;
  db.update(updateMe, newAction)
    .then(updatedAction => {
      res.status(200).json(updatedAction);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The actions information could not be updated." });
    });
});

router.delete(`/:id`, (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(err => {
      console.log("error", err);
      res
        .status(500)
        .json({ error: "The actions information could not be deleted." });
    });
});

module.exports = router;
