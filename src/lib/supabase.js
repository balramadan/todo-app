import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rnjqyqiohdhnlcidizdw.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuanF5cWlvaGRobmxjaWRpemR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxOTk4NjIsImV4cCI6MjAyOTc3NTg2Mn0.NKugMvDNBhJJSinMRg59avkbxPE413F-6H1n-DgNlOY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
