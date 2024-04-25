import { create } from "zustand";
import { MAPS_API, OPENWEATHER_API } from "../constants";

export interface Weather {
  id: number;
  name: string;
  visibility: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherAppState {
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  weather: Weather | null;
  getUserPosition: () => Promise<void>;
  loadAddress: () => Promise<void>;
  loadWeather: () => Promise<void>;
  setAddress: (address: string) => void;
}

export const useStore = create<WeatherAppState>((set, get) => {
  return {
    address: null,
    weather: null,
    latitude: null,
    longitude: null,
    getUserPosition: async () => {
      if (!navigator.geolocation) {
        throw new Error("Geolocalização não habilitada!");
      }

      const position: GeolocationPosition = await new Promise(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        },
      );

      const { latitude, longitude } = position.coords;

      set({
        latitude,
        longitude,
      });
    },
    loadAddress: async () => {
      const { getUserPosition } = get();

      await getUserPosition();

      const { latitude, longitude } = get();

      const response = await fetch(
        `${MAPS_API}/geocode/json?latlng=${latitude},${longitude}&key=${
          import.meta.env.VITE_MAPS_API_KEY
        }`,
      );

      if (!response.ok) {
        throw new Error("Erro ao carregar endereço!");
      }

      const data = await response.json();

      set({
        address: data.results[data.results.length - 4].formatted_address,
      });

      await get().loadWeather();
    },
    loadWeather: async () => {
      set({
        weather: null,
      });

      const { address } = get();

      const response = await fetch(
        `${OPENWEATHER_API}/weather?appid=${
          import.meta.env.VITE_OPENWEATHER_API_KEY
        }&q=${address}&units=metric&lang=pt_BR`,
      );

      if (!response.ok) {
        throw new Error("Erro ao carregar dados do tempo!");
      }

      const data = await response.json();

      set({
        weather: data,
      });
    },
    setAddress: (address: string) => {
      set({
        address,
      });
    },
  };
});
