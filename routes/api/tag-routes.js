const router = require('express').Router();
const tryCatch = require('../../lib/tryCatch');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', tryCatch(async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
}));

router.get('/:id', tryCatch(async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
}));

router.post('/', tryCatch(async (req, res) => {
  // create a new tag
}));

router.put('/:id', tryCatch(async (req, res) => {
  // update a tag's name by its `id` value
}));

router.delete('/:id', tryCatch(async (req, res) => {
  // delete on tag by its `id` value
}));

module.exports = router;
