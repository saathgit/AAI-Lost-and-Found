// supabase.js
const SUPABASE_URL = "https://lkykrtmsljrjtyiwvocc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxreWtydG1zbGpyanR5aXd2b2NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MTkyMDgsImV4cCI6MjA4NTI5NTIwOH0.XXfc1Z0gqJqm06T_ANjehrCUwxG5zfsVWyFzt6tUxj4";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabaseClient = supabase;
