import React from "react";
import { Grid } from "@material-ui/core";
import classes from "./App.module.css";
import General from "./components/general/general";


function App() {
  return (
    <section>
      <Grid container direction="column" className={classes.warper}>
        <Grid item container spacing="2">
          <Grid item xs="12" md="6">
            <General />
          </Grid>
          <Grid item xs="12" md="6">
            <General />
          </Grid>
        </Grid>
        <br />
        <Grid item container spacing="2">
          <Grid item xs="12" md="6">
            <General />
          </Grid>
          <Grid item xs="12" md="6">
            <General />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default App;
