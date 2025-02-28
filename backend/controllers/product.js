import Product from "../models/product.js";

export const addProduct = async (req, res) => {
  const { title, description, price, category, qty, imgSrc } = req.body;
  try {
    let product = await Product.create({
      title,
      description,
      price,
      category,
      qty,
      imgSrc,
    });
    res.status(201).json({ message: "Product Added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    let product = await Product.find();
    res.status(201).json({ product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
