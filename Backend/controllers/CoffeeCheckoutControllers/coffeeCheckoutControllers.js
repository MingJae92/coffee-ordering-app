import {supabase} from "../../lib/supaBaseClient.js";

const checkoutControllers = async (req, res) => {
  try {
    const { userId, basket, total } = req.body;

    // Validate input
    if (!userId || !basket || !total) {
      return res.status(400).json({ error: "Missing field input" });
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("checkout_orders")
      .insert([{ user_id: userId, basket: basket, total: total }])
      .select(); // returns inserted row(s)

    if (error) {
      throw error;
    }

    res.status(201).json({ message: "Checkout successfully stored", data });
  } catch (error) {
    console.error("Error saving checkout:", error.message);
    res.status(500).json({ error: "Failed to save data to checkout!" });
  }
};

export default checkoutControllers;
