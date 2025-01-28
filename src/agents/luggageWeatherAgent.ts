import axios from "axios";

export class LuggageWeatherAgent {
  // Obtener datos del clima para un destino específico
  async getWeatherByDestination(destination: string, apiKey: string) {
    try {
      const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: destination,
          units: "metric",
          appid: apiKey,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener datos del clima:", error);
      return null;
    }
  }

  // Obtener sugerencias de equipaje basadas en la duración del viaje y el clima
  getPackingSuggestions(duration: number, weather: "cold" | "hot") {
    const commonItems = ["Pasaporte", "Cargador", "Ropa interior", "Artículos de aseo"];
    const weatherSpecificItems =
      weather === "cold"
        ? ["Abrigo", "Bufanda", "Guantes", "Botas"]
        : ["Protector solar", "Ropa ligera", "Gafas de sol", "Sandalias"];

    // Multiplicar los artículos según la duración
    const packedItems = [...commonItems, ...weatherSpecificItems].map((item) => `${item} x${duration}`);
    return packedItems;
  }
}
