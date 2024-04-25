import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import { useStore } from "../../../store";
import { WeatherAdditionalInfo } from "./WeatherAdditionalInfo";
import { WeatherMainInfo } from "./WeatherMainInfo";

export function WeatherDisplay() {
  const weatherData = useStore((state) => state.weather);

  if (!weatherData) {
    return (
      <Stack mt={4} alignItems="center">
        <Typography>Faça uma pesquisa</Typography>
      </Stack>
    );
  }

  return (
    <Zoom in={!!weatherData}>
      <Card sx={{ mt: 2, p: 2, borderRadius: 2 }}>
        <CardContent>
          <Grid container rowGap={2}>
            <Grid item xs={12}>
              <WeatherMainInfo />
            </Grid>
            <WeatherAdditionalInfo />
          </Grid>
        </CardContent>
      </Card>
    </Zoom>
  );
}
