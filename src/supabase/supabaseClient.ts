import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL: string = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY: string = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "Missing environment variables: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
