const router = require('express').Router();
let Menu = require('../models/menu.model');

router.route('/').get((req, res) => {
  Menu.find()
    .then(menu => res.json(menu))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
  
    const newMenu = new Menu({
      name,
      price,
      description
    });
  
    newMenu.save()
    .then(() => res.json('Menu added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
