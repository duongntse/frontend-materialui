import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile, Grid } from "@material-ui/core";

import { tileData } from "./tileData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.pager
  },
  headGrid: {
    textAlign: "center"
  },
  gridList: {
    width: 500,
    height: 450
  }
}));

export default function ImageGridList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} className={classes.headGrid}>
          <h1>ImageGridList</h1>
        </Grid>
      </Grid>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
