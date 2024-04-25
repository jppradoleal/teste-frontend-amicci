import { Stack, Typography } from "@mui/material";
import { toTitleCase } from "../../../utils";
import { useStore } from "../../../store";

export function WeatherMainInfo() {
  const weatherData = useStore((state) => state.weather);

  if (!weatherData) {
    return <></>;
  }

  return (
    <Stack direction="row" gap={4}>
      <img
        alt={weatherData.weather[0].description}
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />
      <Stack direction="column" justifyContent="space-around">
        <Typography variant="h6">{weatherData.main.temp} ºC</Typography>
        <Typography variant="h6">
          {toTitleCase(weatherData.weather[0].description)}
        </Typography>
      </Stack>
    </Stack>
  );
}
