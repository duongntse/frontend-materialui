import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  Grid,
  ListSubheader,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

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
  },
  icon: {
    color: `rgba(255, 255, 255, 0.54)`
  }
}));

export default function GridListWithTitlebars() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} className={classes.headGrid}>
          <h1>GridListWithTitlebars</h1>
        </Grid>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {tileData.map((tile) => (
            // Tile
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              {/* Image */}
              <img src={tile.img} alt={tile.title} />
              {/* Bar */}
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </div>
  );
}
