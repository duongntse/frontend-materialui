/* AutomaticScrollButtons */
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Buttons } from "../Buttons";
import AppAppBar from "../AppAppBar";
import MyBox from "../MyBox";
import MyContainer from "../MyContainer";
import MyGrid from "../MyGrid";
import MyGridList from "../MyGridList";
import MyHidden from "../MyHidden";
import MyDrawer from "../MyDrawer";

import { useHistory } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const getValue = (history) => {
  let pathName = history.location.pathname;
  let pNs = pathName.split("/");
  let val = parseInt(pNs[pNs.length - 1], 10);

  if (val) {
    return val;
  } else {
    return 0;
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    backgroundColor: theme.palette.secondary.light,
    marginTop: 68
  },
  tabPanel: {
    marginTop: 40,
    width: "100vw"
  },
  tabs: {
    top: 75,
    left: "auto",
    right: "auto"
    // position: "fixed"
  }
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(getValue(history));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { tabData } = props;

  return (
    <div
      style={{
        left: "20%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            className={classes.tabs}
            orientation="horizontal" // horizontal || vertical
            value={value}
            onChange={handleChange}
            variant="scrollable"
            aria-label="scrollable auto tabs example"
            indicatorColor="primary"
            scrollButtons="auto"
            textColor="primary"
          >
            {tabData.map((td, ind) => (
              <Tab label={td.label} {...a11yProps(ind)} />
            ))}
          </Tabs>
        </AppBar>
        {tabData.map((td, ind) => (
          <TabPanel className={classes.tabPanel} value={value} index={ind}>
            {td.component}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}
