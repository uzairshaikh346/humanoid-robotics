import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

// Check if Supabase is configured
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== '' && 
  supabaseAnonKey !== '' &&
  supabaseUrl.startsWith('http');

// Create a lazy-initialized client
let supabaseClient: SupabaseClient | null = null;
let hasWarned = false;

// Function to get or create the Supabase client
const getSupabaseClient = (): SupabaseClient | null => {
  if (!isSupabaseConfigured) {
    // Only warn once to avoid console spam
    if (!hasWarned) {
      console.info(
        'ℹ️ Supabase is not configured. Authentication features are disabled. To enable, set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.'
      );
      hasWarned = true;
    }
    return null;
  }

  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseClient;
};

// Export the client (may be null if not configured)
export const supabase = getSupabaseClient();

// Export the function for dynamic access
export { getSupabaseClient };