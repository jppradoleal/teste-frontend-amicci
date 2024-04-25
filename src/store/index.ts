import { create } from "zustand";

export interface WeatherAppState {
  address: string | null
  weather: Record<string, string> | null
}

export const useStore = create<WeatherAppState>(() => {
  return {
    address: null,
    weather: null
  }
})
