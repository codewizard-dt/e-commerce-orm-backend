const router = require('express').Router();
const tryCatch = require('../../lib/tryCatch');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', tryCatch(async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.getJson({
    include: [{ model: Product }]
  })
  res.json(categories)
}));

router.get('/:id', tryCatch(async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.getJsonByPk(req.params.id, {
    include: [{ model: Product }]
  })
  res.json(category)
}))

router.post('/', tryCatch(async (req, res) => {
  // create a new category
  const { category_name } = req.body
  const result = await Category.create({ category_name })
  res.json(result)
}));

router.put('/:id', tryCatch(async (req, res) => {
  // update a category by its `id` value
  const { category_name } = req.body
  const result = await Category.update({ category_name }, { where: { id: req.params.id } })
  res.json(result)
}));

router.delete('/:id', tryCatch(async (req, res) => {
  // delete a category by its `id` value
  const result = await Category.destroy({ where: { id: req.params.id } })
  res.json(result)
}));

module.exports = router;
