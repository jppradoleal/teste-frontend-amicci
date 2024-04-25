import { FormEvent } from "react";
import { Search } from "../../components/Search";
import { useStore } from "../../store";

export function Weather() {
  const { weather, loadWeather } = useStore(state => ({
    weather: state.weather,
    loadWeather: state.loadWeather
  }))
  
  async function onSubmit(e: FormEvent) {
    e.preventDefault()

    await loadWeather()
  }

  return <main>
    {JSON.stringify(weather)}
    <Search onSubmit={onSubmit} />
  </main>
}
