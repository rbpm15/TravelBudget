import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { RECOMMENDED_PLACES } from "@/lib/recommended";

export async function GET() {
  try {
    if (!supabase) {
      return NextResponse.json(RECOMMENDED_PLACES);
    }

    const { data, error } = await supabase
      .from("recomendados")
      .select("*")
      .order("created_at", { ascending: true });

    if (error || !data || data.length === 0) {
      if (error) {
        console.warn("Could not load 'recomendados' table, falling back to static file:", error.message);
      }
      return NextResponse.json(RECOMMENDED_PLACES);
    }

    // Map database fields to frontend camelCase fields
    const formattedData = data.map((item) => ({
      destino: item.destino,
      nombreCorto: item.nombre_corto,
      pais: item.pais,
      flag: item.flag,
      rating: item.rating,
      tag: item.tag,
      clima: item.clima,
      lat: Number(item.lat),
      lon: Number(item.lon),
      imagen: item.imagen,
      presupuesto_estimado: item.presupuesto_estimado,
      hoteles: item.hoteles,
      atracciones: item.atracciones,
      restaurantes: item.restaurantes,
      itinerario: item.itinerario,
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Recommended route error:", error);
    return NextResponse.json(RECOMMENDED_PLACES);
  }
}
