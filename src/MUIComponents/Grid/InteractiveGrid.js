import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#03a9f46b",
    marginBottom: "1em",
    padding: "1em",
    minHeight: "20rem"
  },
  headGrid: {
    textAlign: "center"
  },
  displayGrid: {
    minHeight: "18rem"
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function InteractiveGrid() {
  const [direction, setDirection] = React.useState("row");
  const [justify, setJustify] = React.useState("flex-start");
  const [alignItems, setAlignItems] = React.useState("flex-start");
  const classes = useStyles();

  const handleChangeDirection = (event) => {
    setDirection(event.target.value);
  };
  const handleChangeJustify = (event) => {
    setJustify(event.target.value);
  };
  const handleChangeAlignItems = (event) => {
    setAlignItems(event.target.value);
  };

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12} className={classes.headGrid}>
        <Typography align={"center"} variant="h2" gutterBottom>
          InteractiveGrid
        </Typography>
      </Grid>
      <Grid
        container
        spacing={1}
        direction={direction}
        justify={justify}
        alignItems={alignItems}
        className={classes.displayGrid}
      >
        <Grid item>
          <Paper className={classes.paper}>Cell 1</Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>Cell 2</Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>Cell 3</Paper>
        </Grid>
      </Grid>
      {/* 1. direction */}
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container spacing={2}>
            <Grid item>
              <FormLabel style={{ textAlign: "center" }}>
                <Typography align={"left"} variant="body1" gutterBottom>
                  direction
                </Typography>
              </FormLabel>
              <RadioGroup
                name="direction"
                aria-label="direction"
                value={direction}
                onChange={handleChangeDirection}
                row
              >
                {["row", "row-reverse", "column", "column-reverse"].map(
                  (value) => (
                    <FormControlLabel
                      key={value}
                      value={value}
                      control={<Radio />}
                      label={value}
                    />
                  )
                )}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {/* 2. justify */}
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>
                <Typography align={"left"} variant="body1" gutterBottom>
                  justify
                </Typography>
              </FormLabel>
              <RadioGroup
                name="justify"
                aria-label="justify"
                value={justify}
                onChange={handleChangeJustify}
                row
              >
                {[
                  "flex-start",
                  "center",
                  "flex-end",
                  "space-between",
                  "space-around",
                  "space-evenly"
                ].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={value}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {/* 3. alignItems */}
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>
                <Typography align={"left"} variant="body1" gutterBottom>
                  alignItems
                </Typography>
              </FormLabel>
              <RadioGroup
                name="alignItems"
                aria-label="alignItems"
                value={alignItems}
                onChange={handleChangeAlignItems}
                row
              >
                {[
                  "flex-start",
                  "center",
                  "flex-end",
                  "stretch",
                  "baseline"
                ].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value}
                    control={<Radio />}
                    label={value}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
