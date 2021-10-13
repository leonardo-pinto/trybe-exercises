const express = require('express');
const rescue = require('express-rescue');
const ProductModel = require('../models/productModel');
const validateBody = require('../middlewares/validateBody');

const router = express.Router();

router.get('/', async (_req, res, _next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res, _next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) {
    return res.status(404).json({ error: { message: "Product not found" } })
  }

  return res.status(200).json(product);
});

router.post(
  '/', 
  validateBody,
  rescue (async (req, res) => {
    const { name, brand } = req.body;
  
    // if (!name || !brand) {
    //   return res.status(400).json({ error: { message: "Invalid data" }});
    // }
  
    const newProduct = await ProductModel.add(name, brand);
  
    res.status(201).json(newProduct);
  }),
);

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (Object.keys(products).length === 0) {
    return res.status(400).send({ message: "Invalid data" });
  }

  res.status(200).json(products);
});

router.put(
  '/:id', 
  validateBody,  
  async (req, res) => {
  const { name, brand } = req.body;
  if (!name || !brand) {
    return res.status(400).json({ error: { message: "Invalid data" }});
  }
 
  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json(products);
});

module.exports = router;