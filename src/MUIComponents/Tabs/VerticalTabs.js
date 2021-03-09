/* Vertical tabs */
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
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
import { useHistory } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 80,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex"
    // height: "80vh"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

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

export default function VerticalTabs(props) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(getValue(history));

  const handleChange = (event, newValue) => {
    history.push(`/materialui/${newValue}`);
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
        <Tabs
          orientation="vertical" // horizontal || vertical
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="Vertical tabs example"
          indicatorColor="primary"
          scrollButtons="auto"
          textColor="primary"
          className={classes.tabs}
        >
          {tabData.map((td, ind) => (
            <Tab label={td.label} {...a11yProps(ind)} />
          ))}
        </Tabs>
        {tabData.map((td, ind) => (
          <TabPanel value={value} index={ind}>
            {td.component}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}
