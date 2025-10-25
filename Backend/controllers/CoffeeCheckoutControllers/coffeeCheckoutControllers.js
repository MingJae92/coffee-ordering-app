import { supabase } from "../../lib/supaBaseClient.js";

const checkoutControllers = async (req, res) => {
  try {
    const { userId, basket } = req.body;

// Validate
if (!userId || !basket || basket.length === 0) {
  return res.status(400).json({ error: "Missing input or empty basket" });
}

// Map basket items to match table columns
const rows = basket.map(item => ({
  user_id: userId,
  product_id: item.productId,
  title: item.title,
  description: item.description,
  total: item.quantity
}));

// Insert only the mapped rows
const { data, error } = await supabase
  .from("checkout_orders")
  .insert(rows) // ✅ only column-matching objects
  .select();


    console.log("Inserted data:", data, "Error:", error);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: "Checkout successfully stored", data });
  } catch (err) {
    console.error("Error saving checkout:", err.message);
    res.status(500).json({ error: "Failed to save checkout data" });
  }
};

export default checkoutControllers;
