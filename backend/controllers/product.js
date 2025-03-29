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

export const getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    let product = await Product.findById(id);
    if (!product) return res.json({ message: "Product not found" });
    res.status(200).json({
      message: "Specific product",
      product,  
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProductById = async (req, res) => {
  const id = req.params.id;

  try {
    let product = await Product.findByIdAndUpdate(id,req.body,{new:true});
    if (!product) return res.json({ message: "Product not found" });
    res.status(200).json({ message: "Product updated Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteProductById = async (req, res) => {
  const id = req.params.id;

  try {
    let product = await Product.findByIdAndDelete(id);
    if (!product) return res.json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
