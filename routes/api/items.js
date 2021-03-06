const express = require('express');
const router = express.Router();

// bring in the item model
const Item = require('../../models/Item');

// @routes GET api/items
// @desc get all items
//@access Public (for now)
router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
});

// @routes POST api/items
// @desc create an item
//@access Public (for now)
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

// @routes DELETE api/items/:id
// @desc delete an item
//@access Public (for now)
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;