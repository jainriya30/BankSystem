const router = require('express').Router();

let Customer = require('../models/customers');

router.route('/').get((req, res) => {
  Customer.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const balance = Number(req.body.balance);
  const date = Date.parse(req.body.date);

  const newCustomer = new Customer({
    name,
    email,
    balance,
    date,
  });

  newCustomer.save()
  .then(() => res.json('Customer added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Customer.findById(req.params.id)
    .then(customer => res.json(customer))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/transfer/:id').post((req, res) => {
  Customer.findById(req.params.id)
    .then(customer => {
      customer.balance -= Number(req.body.balance);

      customer.save()
        .then(() => res.json('Amount Transferred!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/deposit/:id').post((req, res) => {
  Customer.findById(req.params.id)
    .then(customer => {
      
      customer.balance += Number(req.body.balance);
      
      customer.save()
        .then(() => res.json('Deposited!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});




router.route('/depositt/:name').post((req, res) => {
  Customer.findOne({ name: req.params.name})
  .then(customer => {
      
    customer.balance += Number(req.body.balance);
    
    customer.save()
      .then(() => res.json('Deposited!'))
      .catch(err => res.status(400).json('Error: ' + err));
  })
  .catch(err => res.status(400).json('Error: ' + err));


});


module.exports = router;