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
      console.log(err)
      if (err === `Username ${name} is already taken`) {
        res.status(400).send({ error: err });
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
    .catch((err) => {
      if (err === `Username ${name} does not exist.` || 'The password is wrong') {
        res.status(400).send({ error: err });
      } else {
        next(err);
      }
    });
});

module.exports = router;