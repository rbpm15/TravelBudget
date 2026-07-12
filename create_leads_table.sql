-- script para crear la tabla de leads en Supabase
-- Copia y pega esto en el SQL Editor de tu proyecto de Supabase y haz clic en RUN

CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    origen TEXT DEFAULT 'No especificado',
    destino TEXT NOT NULL,
    dias INTEGER NOT NULL,
    personas INTEGER NOT NULL,
    confort TEXT NOT NULL,
    moneda TEXT DEFAULT 'USD',
    presupuesto NUMERIC NOT NULL,
    desglose JSONB NOT NULL
);

-- Habilitar RLS (Row Level Security) si lo deseas, o crear una política para permitir inserciones públicas
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir inserciones públicas" 
ON public.leads 
FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Permitir lectura solo a administradores o autenticados" 
ON public.leads 
FOR SELECT 
TO authenticated 
USING (true);
