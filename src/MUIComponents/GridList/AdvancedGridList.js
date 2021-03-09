import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { tileData } from "./tileData.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450,
    transform: "translateZ(0)"
  },
  icon: {
    color: theme.palette.info.light
  },
  titleBar: {
    color: theme.palette.info.light,
    background:
      "linear-gradient(180deg, rgba(0,0,0,.8) 0%, rgba(0,0,0,.3) 70%,rgba(0,0,0,.0) 100%)"
  }
}));

export default function AdvancedGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <h1>AdvancedGridList</h1>
        </Grid>
        <Grid item xs={12}>
          <GridList cols={2} className={classes.gridList}>
            {tileData.map((tile) => (
              <GridListTile
                key={tile.img}
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
              >
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  titlePosition={"top"}
                  actionIcon={
                    <IconButton
                      aria-label={`star ${tile.title}`}
                      className={classes.icon}
                    >
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                  className={classes.titleBar}
                />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
    </div>
  );
}
