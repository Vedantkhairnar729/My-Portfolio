import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://peybvvomeigdnrqmezin.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBleWJ2dm9tZWlnZG5ycW1lemluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMjY1MDUsImV4cCI6MjA2MzkwMjUwNX0.nx5mOKXbTpqbOnco_wu0nTqwzo5_xWUESkR5LttBgfw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);