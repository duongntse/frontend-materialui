import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MyAppBar from "./MUIComponents/AppBar";
import Toolbar, { styles as toolbarStyles } from "./MUIComponents/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  },
  toolbar: {
    justifyContent: "space-between"
  }
}));

export function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MyAppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link className={classes.link} to="/materialui">
            <Typography variant="h6" className={classes.title}>
              MaterialUI
            </Typography>
          </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </MyAppBar>
    </div>
  );
}

export default Header;
