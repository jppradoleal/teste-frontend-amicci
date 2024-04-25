import { FormEvent } from "react";
import { Search } from "../../components/Search";
import { useStore } from "../../store";
import { WeatherDisplay } from "../../components/WeatherDisplay";

export function Weather() {
  const { loadWeather } = useStore(state => ({
    weather: state.weather,
    loadWeather: state.loadWeather
  }))
  
  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    await loadWeather()
  }

  return <main>
    <Search onSubmit={onSubmit} />
    <WeatherDisplay />
  </main>
}
