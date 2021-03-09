import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "block"
    }
  }
}));

export function Buttons() {
  const classes = useStyles();
  const primaryBtnProp = { variant: "contained", color: "primary" };
  const secondaryBtnProp = { variant: "contained", color: "secondary" };
  const disabledBtnProp = { variant: "contained", disabled: true };
  return (
    <div className={classes.root}>
      <Button {...primaryBtnProp}>Hello World</Button>
      <Button variant="contained">Default</Button>
      <Button {...primaryBtnProp}>Primary</Button>
      <Button {...secondaryBtnProp}>Secondary</Button>
      <Button {...disabledBtnProp}>Disabled</Button>
      <Button {...primaryBtnProp} href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}
