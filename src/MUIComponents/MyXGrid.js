// MyXGrid
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import BasisPaginationGrid from "./XGrid/BasisPaginationGrid";
import ColumnSelectorGrid from "./XGrid/ColumnSelectorGrid";
import ControlledSelectionGrid from "./XGrid/ControlledSelectionGrid";

const useClasses = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ddd",
    minHeight: "50vh",
    minWidth: "50vw",
    textAligh: "center",
    overflow: "hidden",
    padding: ".5em"
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

export default function MyXGrid() {
  const classes = useClasses();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <h1>MyXGrid</h1>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ControlledSelectionGrid />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <BasisPaginationGrid />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ColumnSelectorGrid />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
