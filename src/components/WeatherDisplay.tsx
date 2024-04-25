import { Card, CardContent, Grid, Stack, Typography, Zoom } from "@mui/material";
import { useStore } from "../store";
import { toTitleCase } from "../utils";
import { Widget } from "./WeatherWidget";

export function WeatherDisplay() {
  const weatherData = useStore(state => state.weather)

  if (!weatherData) {
    return <Stack mt={4} alignItems='center'>
      <Typography>Faça uma pesquisa</Typography>
    </Stack>
  }

  return <Zoom in={!!weatherData}>
    <Card sx={{ mt: 2, p: 2, borderRadius: 2 }}>
      <CardContent>
        <Grid container rowGap={2}>
          <Grid item xs={12}>
            <Stack direction="row" gap={4}>
              <img
                alt={weatherData.weather[0].description}
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              />
              <Stack direction="column" justifyContent='space-around'>
                <Typography variant="h6">{weatherData.main.temp} ºC</Typography>
                <Typography variant="h6">{toTitleCase(weatherData.weather[0].description)}</Typography>
              </Stack>
            </Stack>
          </Grid>
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
        </Grid>
      </CardContent>
    </Card>
  </Zoom>
}
