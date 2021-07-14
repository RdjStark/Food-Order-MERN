const router = require('express').Router();
let Orders = require('../models/orders.model');

router.route('/').get((req, res) => {
  Orders.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const total_amount = req.body.total_amount;
  
    const newOrder = new Orders({
      total_amount,
    });
  
    newOrder.save()
    .then(() => res.json('Order added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
