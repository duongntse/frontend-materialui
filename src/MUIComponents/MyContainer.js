import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MyGridList from "./MyGridList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cfe8fc",
    height: "100vh",
    // width: "100%",
    // minWidth: "70vw",
    textAligh: "center"
  }
}));

export function MyContainer(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <MyGridList />
      </Container>
    </React.Fragment>
  );
}
export default MyContainer;
