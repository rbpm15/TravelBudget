const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://vbcejftnigquokrjqgmy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiY2VqZnRuaWdxdW9rcmpxZ215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3Mjg1MzIsImV4cCI6MjA5OTMwNDUzMn0.LgqzLuGtUq9njgYzBM1RRfxi48GBlNlwwBv9MdnqH6c';

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  try {
    const { data, error } = await supabase
      .from('destinos_cache')
      .select('*')
      .ilike('destino', '%San Miguel%');
      
    if (error) {
      console.error(error);
      return;
    }
    
    console.log("Found SM records count:", data.length);
    data.forEach(row => {
      console.log(`ID: ${row.id} | Destino: "${row.destino}" | Tipo: "${row.tipo_viaje}"`);
      console.log("Hotels:", JSON.stringify(row.hoteles, null, 2));
    });
  } catch (err) {
    console.error(err);
  }
}

check();
