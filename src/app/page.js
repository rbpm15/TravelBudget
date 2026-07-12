"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plane, Calendar, Wallet, Users, Award, ChevronRight, Lock, Unlock, Mail, User, CheckCircle, Download, DollarSign, Navigation, X, MapPin } from "lucide-react";
import { RECOMMENDED_PLACES } from "@/lib/recommended";

const RATES = {
  USD: { symbol: "$", rate: 1.0, label: "USD ($)" },
  EUR: { symbol: "€", rate: 0.92, label: "EUR (€)" },
  MXN: { symbol: "$", rate: 18.2, label: "MXN ($)" },
  COP: { symbol: "$", rate: 4000.0, label: "COP ($)" },
  ARS: { symbol: "$", rate: 950.0, label: "ARS ($)" },
  CLP: { symbol: "$", rate: 940.0, label: "CLP ($)" },
};

export default function Home() {
  // Estado de carga y errores
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadingStep, setLoadingStep] = useState(0);

  // Paso 1: Configuración de búsqueda
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [dias, setDias] = useState(5);
  const [personas, setPersonas] = useState(1);
  const [confort, setConfort] = useState("intermedio"); // mochilero, intermedio, lujo
  const [moneda, setMoneda] = useState("USD");

  // Paso 2: Presupuesto interactivo y datos de API
  const [showDashboard, setShowDashboard] = useState(false);
  const [originalData, setOriginalData] = useState(null);
  const [budgetBreakdown, setBudgetBreakdown] = useState({
    vuelos: 0,
    hotel: 0,
    comida: 0,
    transporte: 0
  });
  const [totalBudget, setTotalBudget] = useState(0);

  // Paso 3: Captura de leads
  const [leadSent, setLeadSent] = useState(false);
  const [nombreLead, setNombreLead] = useState("");
  const [emailLead, setEmailLead] = useState("");
  const [submittingLead, setSubmittingLead] = useState(false);
  const [leadError, setLeadError] = useState(null);

  // Estado para el modal de detalle de lugares
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (item, category) => {
    if (item.descripcion) {
      setModalData({
        ...item,
        category: category === 'hotel' ? '🏨 Hospedaje' : category === 'atraccion' ? '🏛️ Atracción Turística' : '🍽️ Restaurante'
      });
    } else {
      let defaultImg = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80";
      let catName = "🏨 Hospedaje";
      let details = ["Wi-Fi de alta velocidad", "Aire acondicionado", "Recepción 24 horas", "Limpieza diaria"];
      
      if (category === 'atraccion') {
        defaultImg = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80";
        catName = "🏛️ Atracción Turística";
        details = ["Ideal para fotografía", "Fácil acceso", "Visitas guiadas disponibles", "Apto para familias"];
      } else if (category === 'restaurante') {
        defaultImg = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80";
        catName = "🍽️ Restaurante";
        details = ["Opciones vegetarianas", "Terraza exterior", "Ingredientes locales frescos", "Excelente coctelería"];
      }

      setModalData({
        nombre: item.nombre,
        stars: item.stars || "4.5",
        tipo: item.tipo || "",
        imagen: defaultImg,
        descripcion: `Un espectacular lugar altamente recomendado en ${destino}. Destaca por su gran reputación entre viajeros locales e internacionales, brindando una experiencia única que combina calidad, servicio y un ambiente inolvidable.`,
        precio: category === 'hotel' ? "$$$" : "$$",
        rating: (4.4 + Math.random() * 0.5).toFixed(1),
        direccion: `Zona Turística, ${destino}`,
        detalles: details,
        category: catName
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const [recommendedPlaces, setRecommendedPlaces] = useState(RECOMMENDED_PLACES);

  useEffect(() => {
    async function loadRecommended() {
      try {
        const response = await fetch("/api/recommended");
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setRecommendedPlaces(data);
          }
        }
      } catch (err) {
        console.warn("Error loading recommended places from DB:", err);
      }
    }
    loadRecommended();
  }, []);

  // Animación del loader
  const loadingMessages = [
    "Consultando bases de datos de viajes...",
    "Calculando rutas de vuelo recomendadas...",
    "Estimando costos locales de alojamiento...",
    "Filtrando mejores restaurantes y actividades...",
    "Estructurando tu presupuesto optimizado..."
  ];

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % 5);
      }, 2000);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  // Genera presupuesto inicial sugerido para alimentar la API en base al nivel de confort (en USD)
  const getPresupuestoSugeridoUSD = () => {
    const basePerDay = confort === "mochilero" ? 50 : confort === "lujo" ? 250 : 120;
    const baseFlights = confort === "mochilero" ? 300 : confort === "lujo" ? 1200 : 600;
    return (baseFlights * personas) + (basePerDay * dias * personas);
  };

  const handleLoadRecommended = async (place) => {
    setLoading(true);
    setError(null);
    setShowDashboard(false);

    // 1. Establecer inputs de búsqueda
    setDestino(place.destino);
    if (!origen) {
      setOrigen("Ciudad de México");
    }
    
    let selectedConfort = "intermedio";
    if (place.destino === "Kyoto, Japón") selectedConfort = "lujo";
    if (place.destino === "Chiang Mai, Tailandia") selectedConfort = "mochilero";
    setConfort(selectedConfort);

    const baseFlights = selectedConfort === "mochilero" ? 300 : selectedConfort === "lujo" ? 1200 : 600;
    const basePerDay = selectedConfort === "mochilero" ? 50 : selectedConfort === "lujo" ? 250 : 120;
    const presupuestoEstimadoUSD = (baseFlights * personas) + (basePerDay * dias * personas);

    const hoy = new Date();
    const regreso = new Date();
    regreso.setDate(hoy.getDate() + parseInt(dias));

    const fechaInicioStr = hoy.toISOString().split("T")[0];
    const fechaFinStr = regreso.toISOString().split("T")[0];

    try {
      // Intentar cargar del API (que accede a la base de datos)
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origen: origen || "Ciudad de México",
          destino: place.destino,
          fecha_inicio: fechaInicioStr,
          fecha_fin: fechaFinStr,
          presupuesto: presupuestoEstimadoUSD.toString(),
          personas: personas.toString(),
          tipo_viaje: selectedConfort === "mochilero" ? "aventura" : "ciudad"
        })
      });

      if (!response.ok) {
        throw new Error("No se pudo conectar a la base de datos.");
      }

      const data = await response.json();

      // Ajustar presupuesto según la divisa seleccionada y días/personas
      const currentRate = RATES[moneda].rate;
      const scaleDays = dias / 5;
      const scalePeople = personas;

      // Usar los valores base del registro de la base de datos
      const baseVuelos = data.presupuesto_estimado?.vuelos || place.presupuesto_estimado.vuelos;
      const baseHotel = data.presupuesto_estimado?.hotel || place.presupuesto_estimado.hotel;
      const baseComida = data.presupuesto_estimado?.comida || place.presupuesto_estimado.comida;
      const baseTransport = data.presupuesto_estimado?.transporte || place.presupuesto_estimado.transporte || 100;

      const scaledVuelos = baseVuelos * scalePeople;
      const scaledHotel = baseHotel * scaleDays * scalePeople;
      const scaledComida = baseComida * scaleDays * scalePeople;
      const scaledTransport = baseTransport * scaleDays * scalePeople;

      const breakdown = {
        vuelos: Math.round(scaledVuelos * currentRate),
        hotel: Math.round(scaledHotel * currentRate),
        comida: Math.round(scaledComida * currentRate),
        transporte: Math.round(scaledTransport * currentRate)
      };

      setBudgetBreakdown(breakdown);
      const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
      setTotalBudget(total);

      // Itinerario dinámico
      const dynamicItinerary = [];
      const extraActivities = [
        "Día libre para explorar rincones ocultos de la ciudad, hacer fotografía y disfrutar del ambiente local.",
        "Día de compras de souvenirs de diseño y degustación de comida callejera en mercados locales.",
        "Excursión opcional a los alrededores del destino o tarde relajante en un café tradicional de la zona.",
        "Visita a museos secundarios o galerías independientes recomendadas por locales.",
        "Último día de caminatas tranquilas, disfrutar del atardecer y cena especial de despedida en un mirador."
      ];

      const itinerarioBase = data.itinerario || place.itinerario;
      for (let i = 0; i < dias; i++) {
        if (i < itinerarioBase.length) {
          dynamicItinerary.push({
            dia: `Día ${i + 1}`,
            descripcion: itinerarioBase[i].descripcion
          });
        } else {
          const activityIndex = (i - itinerarioBase.length) % extraActivities.length;
          dynamicItinerary.push({
            dia: `Día ${i + 1}`,
            descripcion: extraActivities[activityIndex]
          });
        }
      }

      setOriginalData({
        destino: data.destino || place.destino,
        lat: data.lat || place.lat,
        lon: data.lon || place.lon,
        clima: data.clima || place.clima,
        hoteles: data.hoteles || place.hoteles,
        atracciones: data.atracciones || place.atracciones,
        restaurantes: data.restaurantes || place.restaurantes,
        imagen: data.imagen || place.imagen,
        itinerario: dynamicItinerary,
        presupuesto_estimado: {
          total: scaledVuelos + scaledHotel + scaledComida + scaledTransport,
          vuelos: scaledVuelos,
          hotel: scaledHotel,
          comida: scaledComida,
          transporte: scaledTransport
        }
      });

      setShowDashboard(true);

    } catch (err) {
      console.warn("Error al cargar de la base de datos, usando fallback local:", err);
      // Fallback local en memoria
      const scaleDays = dias / 5;
      const scalePeople = personas;

      const baseVuelos = place.presupuesto_estimado.vuelos;
      const baseHotel = place.presupuesto_estimado.hotel;
      const baseComida = place.presupuesto_estimado.comida;
      const baseTransport = place.presupuesto_estimado.transporte || 100;

      const scaledVuelos = baseVuelos * scalePeople;
      const scaledHotel = baseHotel * scaleDays * scalePeople;
      const scaledComida = baseComida * scaleDays * scalePeople;
      const scaledTransport = baseTransport * scaleDays * scalePeople;

      const currentRate = RATES[moneda].rate;
      const breakdown = {
        vuelos: Math.round(scaledVuelos * currentRate),
        hotel: Math.round(scaledHotel * currentRate),
        comida: Math.round(scaledComida * currentRate),
        transporte: Math.round(scaledTransport * currentRate)
      };

      setBudgetBreakdown(breakdown);
      const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
      setTotalBudget(total);

      const dynamicItinerary = [];
      const extraActivities = [
        "Día libre para explorar rincones ocultos de la ciudad, hacer fotografía y disfrutar del ambiente local.",
        "Día de compras de souvenirs de diseño y degustación de comida callejera en mercados locales.",
        "Excursión opcional a los alrededores del destino o tarde relajante en un café tradicional de la zona.",
        "Visita a museos secundarios o galerías independientes recomendadas por locales.",
        "Último día de caminatas tranquilas, disfrutar del atardecer y cena especial de despedida en un mirador."
      ];

      for (let i = 0; i < dias; i++) {
        if (i < place.itinerario.length) {
          dynamicItinerary.push({
            dia: `Día ${i + 1}`,
            descripcion: place.itinerario[i].descripcion
          });
        } else {
          const activityIndex = (i - place.itinerario.length) % extraActivities.length;
          dynamicItinerary.push({
            dia: `Día ${i + 1}`,
            descripcion: extraActivities[activityIndex]
          });
        }
      }

      setOriginalData({
        destino: place.destino,
        lat: place.lat,
        lon: place.lon,
        clima: place.clima,
        hoteles: place.hoteles,
        atracciones: place.atracciones,
        restaurantes: place.restaurantes,
        imagen: place.imagen,
        itinerario: dynamicItinerary,
        presupuesto_estimado: {
          total: scaledVuelos + scaledHotel + scaledComida + scaledTransport,
          vuelos: scaledVuelos,
          hotel: scaledHotel,
          comida: scaledComida,
          transporte: scaledTransport
        }
      });

      setShowDashboard(true);
    } finally {
      setLoading(false);
    }

    // Scroll suave
    setTimeout(() => {
      const element = document.getElementById("presupuesto-dashboard");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  // Enviar consulta inicial a la API
  const handleCalcular = async (e) => {
    e.preventDefault();
    if (!destino.trim()) return;

    setLoading(true);
    setError(null);
    setShowDashboard(false);

    // Calcular fechas en base a los días seleccionados
    const hoy = new Date();
    const regreso = new Date();
    regreso.setDate(hoy.getDate() + parseInt(dias));

    const fechaInicioStr = hoy.toISOString().split("T")[0];
    const fechaFinStr = regreso.toISOString().split("T")[0];
    const presupuestoEstimadoUSD = getPresupuestoSugeridoUSD();

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origen: origen || "No especificado",
          destino,
          fecha_inicio: fechaInicioStr,
          fecha_fin: fechaFinStr,
          presupuesto: presupuestoEstimadoUSD.toString(),
          personas: personas.toString(),
          tipo_viaje: confort === "mochilero" ? "aventura" : confort === "lujo" ? "ciudad" : "ciudad"
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "No pudimos calcular tu presupuesto.");
      }

      const data = await response.json();
      setOriginalData(data);

      // Desglose de presupuesto devuelto por el API (en USD) convertido a la moneda seleccionada
      const currentRate = RATES[moneda].rate;
      const breakdown = {
        vuelos: Math.round((data.presupuesto_estimado.vuelos || 0) * currentRate),
        hotel: Math.round((data.presupuesto_estimado.hotel || 0) * currentRate),
        comida: Math.round((data.presupuesto_estimado.comida || 0) * currentRate),
        transporte: Math.round((data.presupuesto_estimado.transporte || 0) * currentRate)
      };

      setBudgetBreakdown(breakdown);

      const total = Object.values(breakdown).reduce((a, b) => a + b, 0);
      setTotalBudget(total);

      setShowDashboard(true);

      // Scroll suave
      setTimeout(() => {
        const element = document.getElementById("presupuesto-dashboard");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Manejar cambio de Moneda y recalcular el breakdown y total proporcionalmente
  const handleMonedaChange = (nuevaMoneda) => {
    const antiguaMoneda = moneda;
    setMoneda(nuevaMoneda);

    const rateOld = RATES[antiguaMoneda].rate;
    const rateNew = RATES[nuevaMoneda].rate;
    const scaleFactor = rateNew / rateOld;

    const newBreakdown = {
      vuelos: Math.round(budgetBreakdown.vuelos * scaleFactor),
      hotel: Math.round(budgetBreakdown.hotel * scaleFactor),
      comida: Math.round(budgetBreakdown.comida * scaleFactor),
      transporte: Math.round(budgetBreakdown.transporte * scaleFactor)
    };

    setBudgetBreakdown(newBreakdown);

    const newTotal = Object.values(newBreakdown).reduce((a, b) => a + b, 0);
    setTotalBudget(newTotal);
  };

  // Manejar cambio en un slider individual redistribuyendo los pesos
  const handleSliderChange = (category, newValue) => {
    const parsedNewValue = parseFloat(newValue);
    const oldValue = budgetBreakdown[category];
    const diff = parsedNewValue - oldValue;

    // Categorías restantes a las que se les va a quitar/poner presupuesto
    const otherCategories = Object.keys(budgetBreakdown).filter(cat => cat !== category);

    // Suma actual de las otras categorías para calcular su proporción
    const sumOthers = otherCategories.reduce((sum, cat) => sum + budgetBreakdown[cat], 0);

    const newBreakdown = { ...budgetBreakdown, [category]: parsedNewValue };

    if (sumOthers > 0) {
      // Distribuir la diferencia proporcionalmente entre las otras categorías
      otherCategories.forEach((cat) => {
        const proportion = budgetBreakdown[cat] / sumOthers;
        let change = diff * proportion;
        let categoryNewValue = budgetBreakdown[cat] - change;

        // Asegurar que no sea negativo (mínimo de supervivencia 10 unidades de la divisa actual)
        if (categoryNewValue < 10) {
          categoryNewValue = 10;
        }

        newBreakdown[cat] = Math.round(categoryNewValue);
      });

      // Ajustar redondeos pequeños para asegurar que la suma es constante
      const currentSum = Object.values(newBreakdown).reduce((a, b) => a + b, 0);
      const errorDiff = totalBudget - currentSum;
      if (errorDiff !== 0) {
        newBreakdown[otherCategories[0]] += errorDiff;
      }
    } else {
      const equalShare = diff / otherCategories.length;
      otherCategories.forEach(cat => {
        newBreakdown[cat] = Math.max(10, Math.round(budgetBreakdown[cat] - equalShare));
      });
    }

    setBudgetBreakdown(newBreakdown);
  };

  // Enviar el lead a la base de datos
  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!nombreLead.trim() || !emailLead.trim()) return;

    setSubmittingLead(true);
    setLeadError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombreLead,
          email: emailLead,
          origen: origen || "No especificado",
          destino: originalData.destino,
          dias: dias,
          personas: personas,
          confort: confort,
          moneda: moneda,
          presupuesto: totalBudget,
          desglose: budgetBreakdown
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Ocurrió un error al registrar tus datos.");
      }

      setLeadSent(true);
      localStorage.setItem("travelmate_lead_submitted", "true");

      setTimeout(() => {
        const element = document.getElementById("itinerario-desbloqueado");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);

    } catch (err) {
      setLeadError(err.message);
    } finally {
      setSubmittingLead(false);
    }
  };

  // Intentar cargar estado de lead anterior
  useEffect(() => {
    const isSubmitted = localStorage.getItem("travelmate_lead_submitted");
    if (isSubmitted === "true") {
      setLeadSent(true);
    }
  }, []);

  const getPercent = (value) => {
    return totalBudget > 0 ? (value / totalBudget) * 100 : 0;
  };

  const pctVuelos = getPercent(budgetBreakdown.vuelos);
  const pctHotel = getPercent(budgetBreakdown.hotel);
  const pctComida = getPercent(budgetBreakdown.comida);
  const pctTransporte = getPercent(budgetBreakdown.transporte);

  const segmentStyle = (pct) => ({
    width: `${pct}%`
  });

  const handleDownloadPDF = () => {
    alert(`¡Generando PDF de Presupuesto para ${originalData.destino}!\nEl reporte incluye:\n- Desglose personalizado de ${RATES[moneda].symbol}${totalBudget} ${moneda}\n- Itinerario de ${dias} días\n- Recomendaciones de hoteles y atracciones.\n\nEnviando copia a: ${emailLead || "tu correo"}`);
    window.print();
  };

  return (
    <div className="calculadora-page">
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo">
            <Plane className="logo-icon" />
            <span className="logo-text">TravelBudget AI</span>
          </div>
          <div className="auth-links" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="badge-premium" style={{ marginBottom: 0 }}>Calculadora Inteligente</span>
            <a 
              href={
                showDashboard && originalData
                  ? `https://travelmateai-kn06.onrender.com/login?destino=${encodeURIComponent(originalData.destino)}&presupuesto=${totalBudget}&fecha_inicio=${new Date().toISOString().split('T')[0]}&fecha_fin=${new Date(Date.now() + dias*24*60*60*1000).toISOString().split('T')[0]}`
                  : `https://travelmateai-kn06.onrender.com/login`
              }
              className="navbar-login-btn"
            >
              <User size={14} /> Iniciar Sesión en TravelMate
            </a>
          </div>
        </div>
      </nav>

      <header className="title-section">
        <h1>Configura tu Presupuesto de <span>Viaje Ideal</span></h1>
        <p>Introduce tu origen, destino y personaliza tus gastos en tiempo real. Los sliders inteligentes balancearán la distribución de presupuesto de forma proporcional.</p>
      </header>

      <main className="container">
        {/* PASO 1: Formulario Inicial */}
        <section className="calc-card">
          <form className="calc-form" onSubmit={handleCalcular}>
            <div className="calc-input-group">
              <label htmlFor="origen-calc"><Navigation size={14} /> Ciudad de Origen</label>
              <input
                id="origen-calc"
                type="text"
                placeholder="Ej. Madrid, Ciudad de México..."
                value={origen}
                onChange={(e) => setOrigen(e.target.value)}
                required
              />
            </div>
            <div className="calc-input-group">
              <label htmlFor="destino-calc"><Plane size={14} /> Destino</label>
              <input
                id="destino-calc"
                type="text"
                placeholder="¿A dónde viajas? Ej. Roma, París..."
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
                required
              />
            </div>
            <div className="calc-input-group">
              <label htmlFor="dias-calc"><Calendar size={14} /> Días de Viaje ({dias})</label>
              <input
                id="dias-calc"
                type="range"
                min="2"
                max="30"
                value={dias}
                onChange={(e) => setDias(parseInt(e.target.value))}
              />
            </div>
            <div className="calc-input-group">
              <label htmlFor="personas-calc"><Users size={14} /> Personas ({personas})</label>
              <input
                id="personas-calc"
                type="range"
                min="1"
                max="10"
                value={personas}
                onChange={(e) => setPersonas(parseInt(e.target.value))}
              />
            </div>
            <div className="calc-input-group">
              <label htmlFor="confort-calc"><Award size={14} /> Confort / Tipo</label>
              <select
                id="confort-calc"
                value={confort}
                onChange={(e) => setConfort(e.target.value)}
              >
                <option value="mochilero">Mochilero / Económico</option>
                <option value="intermedio">Intermedio / Cómodo</option>
                <option value="lujo">Exclusivo / Lujo</option>
              </select>
            </div>
            <div className="calc-input-group">
              <label htmlFor="moneda-calc"><DollarSign size={14} /> Moneda</label>
              <select
                id="moneda-calc"
                value={moneda}
                onChange={(e) => handleMonedaChange(e.target.value)}
              >
                {Object.keys(RATES).map((key) => (
                  <option key={key} value={key}>
                    {RATES[key].label}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="calc-btn-submit" disabled={loading} style={{ gridColumn: '1 / -1' }}>
              Calcular Presupuesto <ChevronRight size={18} />
            </button>
          </form>
        </section>

        {/* TOP 5 RECOMENDADOS (CONSULTA RÁPIDA) */}
        <section className="recommended-section" style={{ marginTop: '40px', marginBottom: '40px' }}>
          <div className="recommended-header" style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span className="badge-premium" style={{ background: '#FFF3E0', color: '#E65100', borderColor: '#FFE0B2', marginBottom: '8px' }}>
              ⭐ Destinos Destacados 2026
            </span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--charcoal)', marginBottom: '8px' }}>Top 5 Ciudades Más Bellas del Mundo</h2>
            <p style={{ color: 'var(--slate-gray)', fontSize: '0.95rem', maxWidth: '650px', margin: '0 auto' }}>
              O selecciona uno de nuestros destinos recomendados para cargar su presupuesto e itinerario de forma instantánea.
            </p>
          </div>
          
          <div className="recommended-grid">
            {recommendedPlaces.map((place, idx) => (
              <div 
                key={place.destino}
                className="recommended-card"
                onClick={() => handleLoadRecommended(place)}
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(${place.imagen})` }}
              >
                <div className="card-rank">🏆 #{idx + 1}</div>
                <div className="card-content">
                  <span className="card-tag">{place.tag}</span>
                  <h3>{place.nombreCorto}</h3>
                  <p>{place.flag} {place.pais}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Loader en progreso */}
        {loading && (
          <section className="calc-card calc-loader" style={{ marginTop: '24px' }}>
            <div className="calc-loader-plane">
              <Plane size={28} />
            </div>
            <h3>Generando Presupuesto Personalizado...</h3>
            <p>{loadingMessages[loadingStep]}</p>
          </section>
        )}

        {/* Mensaje de error general */}
        {error && !loading && (
          <div className="container" style={{ textAlign: 'center', marginTop: '24px' }}>
            <div className="error-msg" style={{ display: 'inline-block', padding: '12px 24px', background: '#FCE8E6', color: 'var(--coral-accent)', borderRadius: '12px', fontWeight: '700' }}>
              ⚠️ Error: {error}
            </div>
          </div>
        )}

        {/* PASO 2: Dashboard e Sliders Interactivos */}
        {showDashboard && !loading && (
          <section id="presupuesto-dashboard" className="calc-card dashboard-grid">

            {/* Panel de Visualización Gráfica */}
            <div className="visual-panel">
              <span className="total-budget-badge">Presupuesto Balanceado</span>
              <div className="total-budget-amount">
                {RATES[moneda].symbol}{totalBudget.toLocaleString()} {moneda}
              </div>

              {/* Gráfico circular donut en SVG */}
              <div className="donut-chart-wrapper">
                <svg viewBox="0 0 36 36" className="donut-chart-svg">
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e0e0e0" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3B82F6" strokeWidth="3"
                    strokeDasharray={`${pctVuelos} ${100 - pctVuelos}`}
                    strokeDashoffset="100" />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#FF5A5F" strokeWidth="3"
                    strokeDasharray={`${pctHotel} ${100 - pctHotel}`}
                    strokeDashoffset={`${100 - pctVuelos}`} />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#F59E0B" strokeWidth="3"
                    strokeDasharray={`${pctComida} ${100 - pctComida}`}
                    strokeDashoffset={`${100 - pctVuelos - pctHotel}`} />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#8B5CF6" strokeWidth="3"
                    strokeDasharray={`${pctTransporte} ${100 - pctTransporte}`}
                    strokeDashoffset={`${100 - pctVuelos - pctHotel - pctComida}`} />
                </svg>
                <div className="donut-chart-center">
                  <span>Destino</span>
                  <strong>{originalData?.destino}</strong>
                </div>
              </div>

              {/* Barra de desglose rápida */}
              <div className="budget-bar-chart">
                <div className="budget-bar-segment flights" style={segmentStyle(pctVuelos)}></div>
                <div className="budget-bar-segment hotel" style={segmentStyle(pctHotel)}></div>
                <div className="budget-bar-segment food" style={segmentStyle(pctComida)}></div>
                <div className="budget-bar-segment transport" style={segmentStyle(pctTransporte)}></div>
              </div>
            </div>

            {/* Panel de Sliders Interactivos */}
            <div className="sliders-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3>Ajusta tus Prioridades</h3>
                {/* Selector rápido de moneda dentro del dashboard */}
                <select
                  value={moneda}
                  onChange={(e) => handleMonedaChange(e.target.value)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-soft)',
                    fontWeight: '600',
                    fontSize: '0.8rem',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  {Object.keys(RATES).map((key) => (
                    <option key={key} value={key}>
                      {RATES[key].label}
                    </option>
                  ))}
                </select>
              </div>
              <p style={{ color: 'var(--slate-gray)', fontSize: '0.85rem', marginBottom: '16px' }}>
                Si aumentas una categoría, las demás se ajustarán automáticamente para mantener el presupuesto total constante.
              </p>

              {/* Slider 1: Vuelos */}
              <div className="slider-group flights" style={{ "--percent": `${pctVuelos}%` }}>
                <div className="slider-header">
                  <span className="slider-label">✈️ Vuelos desde {origen || "origen"}</span>
                  <span className="slider-value">
                    {RATES[moneda].symbol}{budgetBreakdown.vuelos} <span>({Math.round(pctVuelos)}%)</span>
                  </span>
                </div>
                <input
                  type="range"
                  className="slider-input"
                  min="10"
                  max={totalBudget - 30}
                  value={budgetBreakdown.vuelos}
                  onChange={(e) => handleSliderChange("vuelos", e.target.value)}
                />
              </div>

              {/* Slider 2: Hoteles */}
              <div className="slider-group hotel" style={{ "--percent": `${pctHotel}%` }}>
                <div className="slider-header">
                  <span className="slider-label">🏨 Hospedaje / Alojamiento</span>
                  <span className="slider-value">
                    {RATES[moneda].symbol}{budgetBreakdown.hotel} <span>({Math.round(pctHotel)}%)</span>
                  </span>
                </div>
                <input
                  type="range"
                  className="slider-input"
                  min="10"
                  max={totalBudget - 30}
                  value={budgetBreakdown.hotel}
                  onChange={(e) => handleSliderChange("hotel", e.target.value)}
                />
              </div>

              {/* Slider 3: Comida */}
              <div className="slider-group food" style={{ "--percent": `${pctComida}%` }}>
                <div className="slider-header">
                  <span className="slider-label">🍝 Alimentación y Restaurantes</span>
                  <span className="slider-value">
                    {RATES[moneda].symbol}{budgetBreakdown.comida} <span>({Math.round(pctComida)}%)</span>
                  </span>
                </div>
                <input
                  type="range"
                  className="slider-input"
                  min="10"
                  max={totalBudget - 30}
                  value={budgetBreakdown.comida}
                  onChange={(e) => handleSliderChange("comida", e.target.value)}
                />
              </div>

              {/* Slider 4: Transporte */}
              <div className="slider-group transport" style={{ "--percent": `${pctTransporte}%` }}>
                <div className="slider-header">
                  <span className="slider-label">🚇 Transporte local e Interno</span>
                  <span className="slider-value">
                    {RATES[moneda].symbol}{budgetBreakdown.transporte} <span>({Math.round(pctTransporte)}%)</span>
                  </span>
                </div>
                <input
                  type="range"
                  className="slider-input"
                  min="10"
                  max={totalBudget - 30}
                  value={budgetBreakdown.transporte}
                  onChange={(e) => handleSliderChange("transporte", e.target.value)}
                />
              </div>

              <div className="balance-alert">
                <span>🔄</span> Presupuesto total congelado. Ajustando distribución en tiempo real.
              </div>
            </div>

          </section>
        )}

        {/* PASO 3: Resultados Completos (Hoteles e Itinerario) */}
        {showDashboard && !loading && (
          <section className="results-section">

            <div id="itinerario-desbloqueado" className="unlocked-section">
              <div className="unlocked-header">
                <div className="unlocked-header-info">
                  <span className="badge-premium" style={{ background: '#E8F5E9', color: '#2E7D32', borderColor: '#C8E6C9', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={12} /> Itinerario Generado con Éxito
                  </span>
                  <h2 style={{ marginTop: '6px' }}>Tu Viaje a {originalData?.destino} está Listo</h2>
                  <p>Origen: {origen} • Presupuesto Ajustado: {RATES[moneda].symbol}{totalBudget.toLocaleString()} {moneda} • {dias} días • {personas} {personas === 1 ? 'persona' : 'personas'}</p>
                </div>
              </div>

              {/* Hoteles y Sitios Sugeridos Reales de la API */}
              <div className="preview-grid">
                <div className="visual-panel" style={{ background: '#FFFFFF', textAlign: 'left', alignItems: 'flex-start' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '12px' }}>🏨 Hoteles Sugeridos</h3>
                  <div className="places-list">
                    {originalData?.hoteles && originalData.hoteles.length > 0 ? (
                      originalData.hoteles.map((hotel, idx) => (
                        <div 
                          key={idx} 
                          className="place-item-card" 
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleOpenModal(hotel, 'hotel')}
                        >
                          <div className="place-img" style={{ backgroundImage: `url(${hotel.imagen || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&q=80'})` }}></div>
                          <div className="place-details">
                            <span className="place-name">{hotel.nombre}</span>
                            <div className="place-meta">
                              <span className="place-rating">⭐ {hotel.stars || "4"} Estrellas</span>
                              <span className="place-badge">Hospedaje</span>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No se encontraron hoteles recomendados.</p>
                    )}
                  </div>
                </div>

                <div className="visual-panel" style={{ background: '#FFFFFF', textAlign: 'left', alignItems: 'flex-start' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '12px' }}>🍽️ Restaurantes y Atracciones</h3>
                  <div className="places-list">
                    {originalData?.atracciones && originalData.atracciones.slice(0, 2).map((atr, idx) => (
                      <div 
                        key={`atr-${idx}`} 
                        className="place-item-card" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleOpenModal(atr, 'atraccion')}
                      >
                        <div className="place-img" style={{ backgroundImage: `url(${atr.imagen || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=200&q=80'})` }}></div>
                        <div className="place-details">
                          <span className="place-name">{atr.nombre}</span>
                          <div className="place-meta">
                            <span className="place-badge" style={{ background: 'rgba(59, 130, 246, 0.08)', color: '#1D4ED8' }}>{atr.tipo || "Visita"}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {originalData?.restaurantes && originalData.restaurantes.slice(0, 2).map((res, idx) => (
                      <div 
                        key={`res-${idx}`} 
                        className="place-item-card" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleOpenModal(res, 'restaurante')}
                      >
                        <div className="place-img" style={{ backgroundImage: `url(${res.imagen || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=200&q=80'})` }}></div>
                        <div className="place-details">
                          <span className="place-name">{res.nombre}</span>
                          <div className="place-meta">
                            <span className="place-badge" style={{ background: 'rgba(245, 158, 11, 0.08)', color: '#B45309' }}>{res.tipo || "Gastronomía"}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Itinerario completo día a día */}
              <div className="visual-panel" style={{ background: '#FFFFFF', textAlign: 'left', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '16px' }}>📅 Itinerario Detallado Día a Día</h3>
                <div className="calc-timeline" style={{ width: '100%' }}>
                  {originalData?.itinerario && originalData.itinerario.length > 0 ? (
                    originalData.itinerario.map((dia, idx) => (
                      <div key={idx} className="calc-timeline-item">
                        <div className="calc-timeline-icon">{idx + 1}</div>
                        <div className="calc-timeline-card">
                          <h4>{dia.dia || `Día ${idx + 1}`}</h4>
                          <p>{dia.descripcion}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Cargando itinerario detallado...</p>
                  )}
                </div>
              </div>

            </div>

            {/* PASO 4: Captación de Lead al final */}
            <div className="lead-capture-section" style={{ marginTop: '40px', marginBottom: '40px' }}>
              {!leadSent ? (
                <div className="lead-card" style={{ margin: '0 auto', border: '1px solid var(--ocean-primary)' }}>
                  <div className="lead-card-icon" style={{ background: 'var(--ocean-light)', color: 'var(--ocean-primary)' }}>
                    <Mail size={24} />
                  </div>
                  <h2>¿Quieres guardar este itinerario?</h2>
                  <p>Te enviamos una copia en PDF junto con alertas de vuelos baratos desde <strong>{origen || "tu origen"}</strong> a <strong>{originalData?.destino}</strong>.</p>

                  <form className="lead-form" onSubmit={handleLeadSubmit}>
                    <div className="lead-form-group">
                      <label htmlFor="lead-name"><User size={12} style={{ marginRight: '4px' }} /> Tu Nombre</label>
                      <input
                        id="lead-name"
                        type="text"
                        placeholder="Ej. Roberto Sánchez"
                        value={nombreLead}
                        onChange={(e) => setNombreLead(e.target.value)}
                        required
                      />
                    </div>

                    <div className="lead-form-group">
                      <label htmlFor="lead-email"><Mail size={12} style={{ marginRight: '4px' }} /> Correo Electrónico</label>
                      <input
                        id="lead-email"
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={emailLead}
                        onChange={(e) => setEmailLead(e.target.value)}
                        required
                      />
                    </div>

                    {leadError && (
                      <div style={{ color: 'var(--coral-accent)', fontSize: '0.8rem', fontWeight: '700' }}>
                        ⚠️ {leadError}
                      </div>
                    )}

                    <button type="submit" className="lead-btn-submit" disabled={submittingLead}>
                      {submittingLead ? "Enviando Itinerario..." : "Enviar Itinerario a mi Correo"}
                    </button>
                  </form>

                  {/* Redirección a TravelMate Login */}
                  <div className="lead-alt-login" style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px dashed var(--border-soft)', textAlign: 'center' }}>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--slate-gray)' }}>
                      ¿Ya tienes una cuenta de <strong>TravelMate AI</strong>?
                    </p>
                    <a
                      href={`https://travelmateai-kn06.onrender.com/login?destino=${encodeURIComponent(originalData?.destino || destino)}&presupuesto=${totalBudget}&fecha_inicio=${new Date().toISOString().split('T')[0]}&fecha_fin=${new Date(Date.now() + dias*24*60*60*1000).toISOString().split('T')[0]}`}
                      className="lead-login-link"
                    >
                      <User size={14} /> Inicia Sesión para sincronizar este viaje →
                    </a>
                  </div>
                </div>
              ) : (
                <div className="lead-card" style={{ margin: '0 auto', border: '1px solid #4CAF50', background: '#F1F8E9' }}>
                  <div className="lead-card-icon" style={{ background: '#C8E6C9', color: '#2E7D32' }}>
                    <CheckCircle size={24} />
                  </div>
                  <h2 style={{ color: '#2E7D32' }}>¡Enviado con Éxito!</h2>
                  <p style={{ color: '#388E3C' }}>Hemos enviado el itinerario a <strong>{emailLead || "tu correo"}</strong>.</p>
                  <button onClick={handleDownloadPDF} className="btn-download-pdf" style={{ marginTop: '16px' }}>
                    <Download size={14} /> Descargar PDF Ahora
                  </button>
                </div>
              )}
            </div>

          </section>
        )}

      </main>

      {/* VENTANA MODAL PARA MÁS INFORMACIÓN DETALLADA Y REAL */}
      {isModalOpen && modalData && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Cerrar modal">
              <X size={20} />
            </button>
            
            <div className="modal-banner" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.85)), url(${modalData.imagen})` }}>
              <div className="modal-badge-container">
                <span className="modal-category-badge">{modalData.category}</span>
              </div>
              <h2 className="modal-title">{modalData.nombre}</h2>
            </div>
            
            <div className="modal-body">
              <div className="modal-meta-grid">
                <div className="modal-meta-item">
                  <span className="meta-label">Puntaje</span>
                  <span className="meta-val">⭐ {modalData.rating} / 5.0</span>
                </div>
                <div className="modal-meta-item">
                  <span className="meta-label">Precio</span>
                  <span className="meta-val" style={{ color: '#059669', fontWeight: '800' }}>{modalData.precio || "$$$"}</span>
                </div>
                {modalData.stars && (
                  <div className="modal-meta-item">
                    <span className="meta-label">Estrellas</span>
                    <span className="meta-val">⭐ {modalData.stars} Estrellas</span>
                  </div>
                )}
                {modalData.tipo && (
                  <div className="modal-meta-item">
                    <span className="meta-label">Categoría</span>
                    <span className="meta-val">{modalData.tipo}</span>
                  </div>
                )}
              </div>
              
              <div className="modal-description">
                <h4 style={{ fontWeight: '800', marginBottom: '8px', fontSize: '1rem', color: '#1F2937' }}>Acerca de este lugar</h4>
                <p style={{ lineHeight: '1.6', color: '#4B5563' }}>{modalData.descripcion}</p>
              </div>
              
              {modalData.direccion && (
                <div className="modal-address" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: '#F9FAFB', borderRadius: '8px', margin: '16px 0', border: '1px solid #E5E7EB' }}>
                  <MapPin size={16} style={{ color: 'var(--ocean-primary)' }} />
                  <span style={{ fontSize: '0.9rem', color: '#4B5563' }}><strong>Dirección:</strong> {modalData.direccion}</span>
                </div>
              )}
              
              {modalData.detalles && modalData.detalles.length > 0 && (
                <div className="modal-highlights" style={{ marginTop: '16px' }}>
                  <h4 style={{ fontWeight: '800', marginBottom: '8px', fontSize: '1rem', color: '#1F2937' }}>Servicios y Destacados</h4>
                  <div className="highlights-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {modalData.detalles.map((det, idx) => (
                      <span key={idx} className="highlight-tag" style={{ background: '#EEF2F6', color: '#334155', padding: '6px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600' }}>
                        ✓ {det}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="modal-footer" style={{ padding: '16px 24px', background: '#F9FAFB', display: 'flex', justifyContent: 'flex-end', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
              <button className="modal-action-btn" onClick={handleCloseModal} style={{ background: 'var(--ocean-primary)', color: '#FFFFFF', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' }}>
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
