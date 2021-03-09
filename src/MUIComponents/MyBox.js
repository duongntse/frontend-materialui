import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "50vw",
    maxWidth: "65vw",
    "& > *": {
      margin: theme.spacing(1),
      display: "block"
    }
  }
}));

export function MyBox() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box component="span" m={4}>
        <Button variant="contained" color="primary">
          Box
        </Button>
      </Box>
      <Box color="text.primary" clone>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </Box>
      <Box component="span" m={4}>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </Box>
      <Box component="span" m={4}>
        <Button variant="contained" disabled>
          Disabled
        </Button>
      </Box>
      <Box component="span" m={4}>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Other
        </Button>
      </Box>
    </div>
  );
}
export default MyBox;
