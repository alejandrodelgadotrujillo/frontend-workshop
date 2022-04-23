import { Grid, TextField, Typography } from "@mui/material";

const SearchBar = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography>Hackathon</Typography>
        <TextField title="Business Trading Partner Searchbar" />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
