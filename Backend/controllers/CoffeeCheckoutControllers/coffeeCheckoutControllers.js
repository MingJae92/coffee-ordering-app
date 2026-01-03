import { supabase } from "../../lib/supaBaseClient.js";

const checkoutControllers = async (req, res) => {
  try {
    const { userId, basket } = req.body;

    // ✅ Validate input
    if (!userId || !basket || basket.length === 0) {
      return res.status(400).json({ error: "Missing input or empty basket" });
    }

    // ✅ Prepare individual order rows
    const rows = basket.map((item) => ({
      user_id: userId,
      product_id: item.productId,
      title: item.title,
      description: item.description,
      total: item.quantity,
    }));

    // ✅ Insert into checkout_orders
    const { data: orderData, error: orderError } = await supabase
      .from("checkout_orders")
      .insert(rows)
      .select();

    if (orderError) {
      console.error("Error inserting checkout_orders:", orderError);
      return res.status(500).json({ error: "Failed to save checkout orders" });
    }

    console.log("✅ Checkout orders inserted:", orderData);

    // ✅ Calculate subtotal (total coffees)
    const totalCoffees = basket.reduce((sum, item) => sum + item.quantity, 0);

    const { data: existingSubtotal } = await supabase
      .from("checkout_orders_subtotal")
      .select("total_coffees", "title", "description")
      .eq("user_id", userId)
      .single();

    const previousTotal = existingSubtotal ? existingSubtotal.total_coffees : 0;
    // const newTotal = previousTotal + totalCoffees;

    const coffeeDetails = basket.map(({ title, description, quantity }) => ({
      title,
      description,
      quantity,
    }));

    // ✅ Upsert subtotal (insert or update if exists)
    const { data: subtotalData, error: subtotalError } = await supabase
      .from("checkout_orders_subtotal")
      .upsert(
        [
          {
            user_id: userId,
            total_coffees: totalCoffees,
            coffee_details: coffeeDetails,
          },
        ],
        { onConflict: "user_id" } // ensures each user only has one subtotal record
      )
      .select();
    if (subtotalError) throw subtotalError;

    if (subtotalError) {
      console.error("Error upserting subtotal:", subtotalError);
      return res.status(500).json({ error: "Failed to update subtotal" });
    }

    console.log("✅ Subtotal upserted:", subtotalData);

    // ✅ Success response
    res.status(201).json({
      message: "Checkout successfully stored",
      orders: orderData,
      subtotal: subtotalData,
    });
  } catch (err) {
    console.error("❌ Error saving checkout:", err.message);
    res.status(500).json({ error: "Failed to save checkout data" });
  }
};

export default checkoutControllers;
