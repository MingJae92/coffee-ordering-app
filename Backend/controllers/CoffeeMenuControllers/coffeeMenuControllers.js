import { supabase } from "../../lib/supaBaseClient.js";

const coffeeMenuControllers = async (req, res) => {
  const { data, error } = await supabase
    .from("coffee")
    .select("title, description, ingredients");

  if (error) {
    return res.status(500).json({
      error: error.message,
    });
  }

  res.status(200).json({
    coffee: data
  });
};

export default coffeeMenuControllers
