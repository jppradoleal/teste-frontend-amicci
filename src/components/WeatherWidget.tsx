import { Stack, Typography } from "@mui/material"

interface WidgetProps {
  label: string
  value: string
}

export function Widget({ label, value }: Readonly<WidgetProps>) {
  return <Stack justifyItems='center'>
    <Typography noWrap>{label}:</Typography>
    <Typography>
      {value}
    </Typography>
  </Stack>
}
