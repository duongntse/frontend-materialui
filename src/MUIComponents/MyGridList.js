import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core/";
import ImageOnlyGridList from "./GridList/ImageOnlyGridList";
import GridListWithTitlebars from "./GridList/GridListWithTitlebars";
import SingleLineGridList from "./GridList/SingleLineGridList";
import AdvancedGridList from "./GridList/AdvancedGridList";
const useClasses = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    minHeight: "50vh",
    minWidth: "50vw",
    maxWidth: "81vw",
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
export default function MyGridList() {
  const classes = useClasses();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} className={classes.headGrid}>
          <Paper className={classes.paper}>
            <AdvancedGridList />
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.headGrid}>
          <Paper className={classes.paper}>
            <SingleLineGridList />
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.headGrid}>
          <Paper className={classes.paper}>
            <ImageOnlyGridList />
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.headGrid}>
          <Paper className={classes.paper}>
            <GridListWithTitlebars />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
