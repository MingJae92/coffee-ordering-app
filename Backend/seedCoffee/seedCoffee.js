import dotenv from 'dotenv';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

// Load env vars first
dotenv.config({ path: '../config/.env' }); // Adjust the path if needed

console.log('SUPABASE_URL:', process.env.SUPABASE_URL ? 'Found' : 'Missing');
console.log('SUPABASE_KEY:', process.env.SUPABASE_KEY ? 'Found' : 'Missing');

// Initialize supabase client using loaded env vars
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const API_URL = 'https://api.sampleapis.com/coffee/hot';

const seedCoffeeData = async () => {
  try {
    const { data: coffees } = await axios.get(API_URL);

    for (const coffee of coffees) {
      const { title, description, ingredients, image } = coffee;

      const { error } = await supabase
        .from('coffees')
        .insert([
          {
            api_id: coffee.id,
            title,
            description,
            ingredients,
            image,
            category: 'hot',
          },
        ]);

      if (error) {
        console.error(`❌ Error inserting ${title}:`, error.message);
      } else {
        console.log(`✅ Inserted: ${title}`);
      }
    }

    console.log('\n🌱 Seeding complete.');
  } catch (err) {
    console.error('❌ Failed to fetch or seed coffee data:', err.message);
  }
};

seedCoffeeData();
