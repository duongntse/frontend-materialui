/* 
innerWidth  |xs      sm       md       lg       xl
            |--------|--------|--------|--------|-------->
width       |   xs   |   sm   |   md   |   lg   |   xl

smUp        |   show | hide
mdDown      |                     hide | show
*/
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Hidden, withWidth, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: "1 0 auto",
    margin: theme.spacing(1),
    overflow: "hidden"
  }
}));

function BreakpointDown(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <h2 style={{ overflow: "hidden" }}>BreakpointDown</h2>
      <Typography variant="subtitle1">Current width: {width}</Typography>
      <div className={classes.container}>
        <Hidden xsDown>
          <Paper className={classes.paper}>xsDown</Paper>
        </Hidden>
        <Hidden smDown>
          <Paper className={classes.paper}>smDown</Paper>
        </Hidden>
        <Hidden mdDown>
          <Paper className={classes.paper}>mdDown</Paper>
        </Hidden>
        <Hidden lgDown>
          <Paper className={classes.paper}>lgDown</Paper>
        </Hidden>
        <Hidden xlDown>
          <Paper className={classes.paper}>xlDown</Paper>
        </Hidden>
      </div>
    </div>
  );
}

BreakpointDown.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};

export default withWidth()(BreakpointDown);
