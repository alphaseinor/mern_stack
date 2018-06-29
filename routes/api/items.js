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


module.exports = router;