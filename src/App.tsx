import { Grid } from "@mui/material";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <SearchBar />
      </Grid>
    </Grid>
  );
}

export default App;
