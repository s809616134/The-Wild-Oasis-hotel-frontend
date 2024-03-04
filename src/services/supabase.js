import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://seaukawbfsvccyihlomz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlYXVrYXdiZnN2Y2N5aWhsb216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3NjczOTQsImV4cCI6MjAxOTM0MzM5NH0.m3XbzftpOwQui-JqFeXG-erRQc2Tc5gOjc8O-jTbFyc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
