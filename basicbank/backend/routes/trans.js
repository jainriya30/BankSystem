const router = require('express').Router();
let Transaction = require('../models/transaction');

router.route('/').get((req, res) => {
  Transaction.find()
    .then(trans => res.json(trans))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newTrans = new Transaction({username});
  newTrans.save()
    .then(() => res.json('Transaction added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;