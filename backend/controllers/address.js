import Address from "../models/address.js";

export const addAddress = async (req, res) => {
  try {
    const {
      fullName,
      address,
      city,
      street,
      pincode,
      state,
      country,
      phoneNumber,
    } = req.body;

    const userId = req.user;

    const userAddress = await Address.create({
      userId,
      fullName,
      address,
      city,
      street,
      pincode,
      state,
      country,
      phoneNumber,
    });

    res
      .status(201)
      .json({ message: "Address added successfully", userAddress,success:true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const getAddress = async (req, res) => {
  try {
    let address = await Address.find({ userId: req.user }).sort({
      createdAt: -1,
    });
    res.json({ message: "address", userAddress: address[0] });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message,success:true });
  }
};
