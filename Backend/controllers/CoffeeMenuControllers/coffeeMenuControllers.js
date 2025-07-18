import { supabase } from "../../lib/supaBaseClient.js";

const coffeeMenuControllers = async (req, res) => {

  const { data, error } = await supabase
    .from("coffee")
    .select("*");

    console.log("Startup data:", data);

  if (error) {
    console.log("❌ Error fetching coffee data:", error.message);
    return res.status(500).json({
      error: error.message,
    });
  }

  if (data && data.length > 0) {
    console.log(`✅ Successfully fetched ${data.length} coffee records.`);
  } else {
    console.log("⚠️ No coffee data found.");
  }

  res.status(200).json({
    coffee: data,
  });
};

export default coffeeMenuControllers;
