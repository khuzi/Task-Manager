import { Grid, Typography } from "@material-ui/core";
import React from "react";
import Structure from "../Structure/Structure";
import Select from "../UI/Select";

const Systems = () => {
  return (
    <Structure titleText="Benchmark">
      <Grid container justify="space-evenly">
        <Grid item md="3">
          <Typography style={{ marginLeft: "1rem" }}>Continent</Typography>
          <Select option="africa" />
        </Grid>
        <Grid item md="3">
          <Typography style={{ marginLeft: "1rem" }}>Industry</Typography>
          <Select option="Mining" />
        </Grid>
        <Grid item md="3">
          <Typography style={{ marginLeft: "1rem" }}>Employee Count</Typography>
          <Select option="5000+" />
        </Grid>
      </Grid>
    </Structure>
  );
};

export default Systems;
