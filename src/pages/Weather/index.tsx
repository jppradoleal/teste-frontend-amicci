import { FormEvent } from "react";
import { toast } from "react-toastify";
import { Search } from "./components/Search";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { useStore } from "../../store";

export function Weather() {
  const { loadWeather } = useStore(state => ({
    loadWeather: state.loadWeather,
  }))

  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      await loadWeather()
    } catch (error) {
      if (error instanceof Error)
        toast.error(error.message)
    }
  }

  return <main>
    <Search onSubmit={onSubmit} />
    <WeatherDisplay />
  </main>
}
