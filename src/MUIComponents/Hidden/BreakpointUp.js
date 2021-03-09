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
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flex: "1 0 auto",
    margin: theme.spacing(1)
  }
}));

function BreakpointUp(props) {
  const classes = useStyles();
  const { width } = props;

  return (
    <div className={classes.root}>
      <h2>BreakpointUp</h2>
      <Typography variant="subtitle1">Current width: {width}</Typography>
      <div className={classes.container}>
        <Hidden xsUp>
          <Paper className={classes.paper}>xsUp</Paper>
        </Hidden>
        <Hidden smUp>
          <Paper className={classes.paper}>smUp</Paper>
        </Hidden>
        <Hidden mdUp>
          <Paper className={classes.paper}>mdUp</Paper>
        </Hidden>
        <Hidden lgUp>
          <Paper className={classes.paper}>lgUp</Paper>
        </Hidden>
        <Hidden xlUp>
          <Paper className={classes.paper}>xlUp</Paper>
        </Hidden>
      </div>
    </div>
  );
}

BreakpointUp.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};

export default withWidth()(BreakpointUp);
