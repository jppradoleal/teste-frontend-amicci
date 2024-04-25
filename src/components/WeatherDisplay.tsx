import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useStore } from "../store";
import { toTitleCase } from "../utils";

export function WeatherDisplay() {
  const weatherData = useStore(state => state.weather)

  if (!weatherData) {
    return <></>
  }

  return <Card sx={{ mt:2, p: 2, borderRadius: 2 }}>
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
      </Grid>
    </CardContent>
  </Card>
}
