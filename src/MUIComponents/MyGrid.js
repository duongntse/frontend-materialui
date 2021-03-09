import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core/";
import SpacingGrid from "./Grid/SpacingGrid";
import BasicGrid from "./Grid/BasicGrid";
import InteractiveGrid from "./Grid/InteractiveGrid";
import AutoGrid from "./Grid/AutoGrid";

const useClasses = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ccc",
    minHeight: "100vh",
    minWidth: "50vw",
    maxWidth: "85vw",
    textAligh: "center",
    overflow: "hidden",
    padding: ".3em"
  },
  headGrid: {
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function MyGrid() {
  const classes = useClasses();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} className={classes.headGrid}>
          <Paper className={classes.paper}>
            <SpacingGrid />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <BasicGrid />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <InteractiveGrid />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <AutoGrid />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
