import Planet from "./Planet";
import classes from "./PlanetList.module.css";
import { Typography, Grid, CircularProgress } from "@mui/material";

const PlanetList = ({ planets, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <CircularProgress color="inherit" />
      </div>
    );
  }
  return (
    <div className={`${classes["planets-list"]}`}>
      <Typography
        gutterBottom
        component="h1"
        variant="h3"
        color="white"
        sx={{ fontWeight: "bold" }}
      >
        Planets
      </Typography>
      <Grid container spacing={3} justify="center">
        {planets.map((item, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <Planet
                key={index}
                name={item.name}
                climate={item.climate}
                diameter={item.diameter}
                rotation_period={item.rotation_period}
                orbital_period={item.orbital_period}
                gravity={item.gravity}
              ></Planet>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default PlanetList;
