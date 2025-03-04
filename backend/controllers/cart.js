import Cart from "../models/cart.js";

export const addToCart = async (req, res) => {
  try {
    const { productId, title, price, qty, imgSrc } = req.body;

    const userId = "67c3cb3b580b5dba7c948baa";

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].qty += qty;
      cart.items[itemIndex].price += price * qty;
    } else {
      cart.items.push({ productId, title, price, qty, imgSrc });
    }
    await cart.save();
    res.status(200).json({
      success: true,
      message: "Item added to cart successfully",
      cart,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const userCart = async (req, res) => {
  try {
    const userId = "67c3cb3b580b5dba7c948baa";

    let cart = await Cart.findOne({ userId });

    if (!cart) return res.json({ message: "cart not found" });

    res.json({ message: "user cart", cart });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const removeProductFromCart = async (req, res) => {
  const productId = req.params.productId;
  try {
    const userId = "67c3cb3b580b5dba7c948baa";

    let cart = await Cart.findOne({ userId });

    if (!cart) return res.json({ message: "cart not found" });

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId
    );

    await cart.save();

    res.json({ message: "product remove from cart" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const clearCart = async (req, res) => {
  try {
    const userId = "67c3cb3b580b5dba7c948baa";

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ items: [] });
    } else {
      cart.items = [];
    }

    await cart.save();

    res.json({ message: "cart cleared" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const decreaseProductQty = async (req, res) => {
  try {
    const { productId, qty } = req.body;

    const userId = "67c3cb3b580b5dba7c948baa";

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (itemIndex > -1) {
      const item = cart.items[itemIndex];

      if (item.qty > qty) {
        const pricePerUnit = item.price / item.qty;
        item.qty -= qty;
        item.price -= pricePerUnit * qty;
      }
      else{
        cart.items.splice(itemIndex,1)
      }

    } else {
      return res.json({message:"Invalid product Id"})
    }
    await cart.save();
    res.status(200).json({
      success: true,
      message: "Item qty decreased ",
      cart,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
