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
    console.log(err)
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
