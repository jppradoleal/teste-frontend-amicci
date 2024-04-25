import { create } from "zustand";
import { MAPS_API } from "../constants";

export interface WeatherAppState {
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  weather: Record<string, string> | null;
  getUserPosition: () => Promise<void>;
  address: string | null
  weather: Record<string, string> | null
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
    weather: null
  }
})
});
