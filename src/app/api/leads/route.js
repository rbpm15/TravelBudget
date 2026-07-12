import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, email, origen, destino, dias, personas, confort, moneda, presupuesto, desglose } = body;

    // Validaciones básicas
    if (!nombre || !email || !destino || !dias || !personas || !confort || !presupuesto || !desglose) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos para guardar tu itinerario." },
        { status: 400 }
      );
    }

    // Insertar el lead en la base de datos de Supabase utilizando el SDK de Supabase (HTTPS)
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          nombre,
          email,
          origen: origen || "No especificado",
          destino,
          dias: parseInt(dias),
          personas: parseInt(personas),
          confort,
          moneda: moneda || "USD",
          presupuesto: parseFloat(presupuesto),
          desglose,
        }
      ])
      .select();

    if (error) {
      console.error("Error al insertar lead en Supabase:", error);
      throw new Error(error.message);
    }

    return NextResponse.json({
      success: true,
      message: "Lead guardado correctamente",
      lead: data[0]
    });
  } catch (error) {
    console.error("Error en API de leads:", error);
    return NextResponse.json(
      { error: error.message || "Ocurrió un error al guardar tu contacto." },
      { status: 500 }
    );
  }
}
