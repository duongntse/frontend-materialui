import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import BreakpointUp from "./Hidden/BreakpointUp";
import BreakpointDown from "./Hidden/BreakpointDown";
import BreakpointOnly from "./Hidden/BreakpointOnly";

const useClasses = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    minHeight: "50vh",
    minWidth: "50vw",
    // maxWidth: "65vw",
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

export default function MyHidden() {
  const classes = useClasses();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>MyHidden</h1>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <BreakpointUp />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <BreakpointDown />
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.headGrid}>
          <Paper className={classes.paper}>
            <BreakpointOnly />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
