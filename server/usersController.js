const router = require('express').Router();
const UserCollectionCommunicator = require('./userCollectionDBCommunicator');
const db = new UserCollectionCommunicator();

router.post('/sign-up', (req, res, next) => {
  const {
    name,
    password
  } = req.body;

  db.create({
    name,
    password
  })
    .then(() => res.json({ status: 'OK' }))
    .catch((err) => {
      if (err.message === `Username ${name} is already taken`) {
        res.status(400).send({ error: err.message });
      } else {
        next(err);
      }
    });
});

router.post('/sign-in', (req, res, next) => {
  const {
    name,
    password
  } = req.body;

  db.getUserId({
    name,
    password
  })
    .then((userId) => res.json({ userId }))
    .catch((error) => {
      if (error.message === `Username ${name} does not exist.` || 'The password is wrong') {
        res.status(400).send({ error: error.message });
      } else {
        next(error);
      }
    });
});

module.exports = router;
