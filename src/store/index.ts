import { create } from "zustand";
import { MAPS_API } from "../constants";

export interface WeatherAppState {
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  weather: Record<string, string> | null;
  getUserPosition: () => Promise<void>;
  loadAddress: () => Promise<void>;
}

export const useStore = create<WeatherAppState>((set, get) => {
  return {
    address: null,
    weather: null,
    latitude: null,
    longitude: null,
    getUserPosition: async () => {
      if (!navigator.geolocation) {
        throw new Error("Geolocation feature not available");
      }

      const position: GeolocationPosition = await new Promise(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }
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
        }`
      );

      const data = await response.json();

      set({
        address: data.results[0].formatted_address,
      });
    },
  };
});
