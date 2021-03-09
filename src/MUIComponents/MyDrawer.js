import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import ResponsiveDrawer from "./Drawers/ResponsiveDrawer";
const useClasses = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ddd",
    minHeight: "50vh",
    minWidth: "50vw",
    maxWidth: "80vw",
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

export default function MyDrawer() {
  const classes = useClasses();
  return (
    <div className={classes.root}>
      <h1>MyDrawer</h1>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ResponsiveDrawer />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
