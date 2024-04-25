import { Box } from "@mui/material";
import { Weather } from "./pages/Weather";

function App() {
  return <Box width={{ md: '25%' }} mx='auto' mt={10}>
    <Weather />
  </Box>
}

export default App
