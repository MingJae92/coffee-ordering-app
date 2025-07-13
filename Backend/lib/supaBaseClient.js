import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "../config/.env" });

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Log environment variable status
if (!supabaseUrl) {
  console.error("❌ SUPABASE_URL is NOT defined!");
} else {
  console.log("✅ SUPABASE_URL is defined.");
}

if (!supabaseKey) {
  console.error("❌ SUPABASE_KEY is NOT defined!");
} else {
  console.log("✅ SUPABASE_KEY is defined.");
}

// Create and export Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
