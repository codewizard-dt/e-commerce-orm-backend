const router = require('express').Router();
const tryCatch = require('../../lib/tryCatch');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', tryCatch(async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.getJson({
    include: [{ model: Product, through: { attributes: [] } }]
  })
  res.json(tags)
}));

router.get('/:id', tryCatch(async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tag = await Tag.getJsonByPk(req.params.id, {
    include: [{ model: Product, through: { attributes: [] } }]
  })
  res.json(tag)
}));

router.post('/', tryCatch(async (req, res) => {
  // create a new tag
  const result = await Tag.create(req.body)
  res.json(result)
}));

router.put('/:id', tryCatch(async (req, res) => {
  // update a tag's name by its `id` value
  const result = await Tag.update(req.body, {
    where: { id: req.params.id }
  })
  res.json(result)
}));

router.delete('/:id', tryCatch(async (req, res) => {
  // delete on tag by its `id` value
  const result = await Tag.destroy({ where: { id: req.params.id } })
  res.json(result)
}));

module.exports = router;
