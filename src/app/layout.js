import "./globals.css";

export const metadata = {
  title: "Calculadora de Presupuesto e Itinerario de Viajes - TravelBudget AI",
  description: "Configura tus días, destino y nivel de confort para generar un presupuesto inteligente. Ajusta tus prioridades en tiempo real y descarga tu itinerario gratis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
