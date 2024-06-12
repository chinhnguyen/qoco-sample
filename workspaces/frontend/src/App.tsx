import "./App.css";
import { Container } from "@mui/material";
import { FlightsTimeline } from "./components/FlightsTimeline";

function App() {
  return (
    <Container sx={{ height: "100%" }}>
      <FlightsTimeline />
    </Container>
  );
}

export default App;
