import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MyContainer from "./MyContainer";

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

export default function CustomizedMenus() {
  const classes = useClasses();

  return (
    <div className={classes.root}>
      <MyContainer />
    </div>
  );
}
