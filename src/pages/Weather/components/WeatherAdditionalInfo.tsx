import { Grid } from "@mui/material";
import { Widget } from "../../../shared/components/Widget";
import { useStore } from "../../../store";

export function WeatherAdditionalInfo() {
  const weatherData = useStore(state => state.weather)

  if (!weatherData) {
    return <></>
  }

  return <>
    <Grid item xs={4}>
      <Widget
        label='Vento'
        value={`${(weatherData.wind.speed * 3.6).toFixed(2)} km/h`}
      />
    </Grid>
    <Grid item xs={4}>
      <Widget
        label='Umidade'
        value={`${weatherData.main.humidity}%`}
      />
    </Grid>
    <Grid item xs={4}>
      <Widget
        label='Sensação Térmica'
        value={`${weatherData.main.feels_like} ºC`}
      />
    </Grid>
    <Grid item xs={4}>
      <Widget
        label='Visibilidade'
        value={`${weatherData.visibility / 1000}km`}
      />
    </Grid>
    <Grid item xs={4}>
      <Widget
        label='Pressão'
        value={`${weatherData.main.pressure}mb`}
      />
    </Grid>
  </>
}