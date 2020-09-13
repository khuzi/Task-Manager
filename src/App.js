import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./App.module.css";
import General from "./components/general/general";
import Benchmark from "./components/Benchmark/Benchmark";
import Systems from "./components/Systems/Systems";
import People from "./components/People/People";

function App() {
  return (
    <section>
      <Grid container direction="column" className={classes.warper}>
        <Grid item container spacing="2">
          <Grid item xs="12" md="6">
            <General />
          </Grid>
          <Grid item xs="12" md="6">
            <Benchmark />
          </Grid>
        </Grid>
        <br />
        <Grid item container spacing="2">
          <Grid item xs="12" md="6">
            <Systems />
          </Grid>
          <Grid item xs="12" md="6">
            <People />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default App;
