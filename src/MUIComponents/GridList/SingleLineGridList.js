// SingleLineGridList
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { tileData } from "./tileData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)"
  },
  title: {
    color: theme.palette.info.light
  },
  gridListTileStyle: {
    minHeight: "20em"
  },
  titleBar: {
    // background:
    //   "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));
export default function SingleLineGridList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} className={classes.gridListTileStyle}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              title={tile.title}
              actionIcon={
                <IconButton ari-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
