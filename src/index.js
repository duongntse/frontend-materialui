import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import Header from "./Header";
import VerticalTabs from "./MUIComponents/Tabs/VerticalTabs";
import AutomaticScrollButtons from "./MUIComponents/Tabs/AutomaticScrollButtons";
import { Buttons } from "./MUIComponents/Buttons";
import MyBox from "./MUIComponents/MyBox";
import MyContainer from "./MUIComponents/MyContainer";
import MyGrid from "./MUIComponents/MyGrid";
import MyGridList from "./MUIComponents/MyGridList";
import MyHidden from "./MUIComponents/MyHidden";
import MyDrawer from "./MUIComponents/MyDrawer";
import MyXGrid from "./MUIComponents/MyXGrid";
function App() {
  const tabData = [
    {
      label: "MyXGrid",
      component: <MyXGrid />
    },
    {
      label: "Buttons",
      component: <Buttons />
    },
    {
      label: "MyGrid",
      component: <MyGrid />
    },
    {
      label: "MyGridList",
      component: <MyGridList />
    },
    {
      label: "MyHidden",
      component: <MyHidden />
    },
    {
      label: "MyDrawer",
      component: <MyDrawer />
    },
    {
      label: "MyXGrid",
      component: <MyXGrid />
    },
    {
      label: "MyContainer",
      component: <MyContainer />
    },
    {
      label: "MyBox",
      component: <MyBox />
    }
  ];
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/materialui">
            <Hidden only={["xs", "sm"]}>
              <VerticalTabs tabData={tabData} />
            </Hidden>
            <Hidden only={["md", "lg", "xl"]}>
              <AutomaticScrollButtons tabData={tabData} />
            </Hidden>
          </Route>
          <Route path="/materialui/:value">
            <Hidden only={["xs", "sm"]}>
              <VerticalTabs tabData={tabData} />
            </Hidden>
            <Hidden only={["md", "lg", "xl"]}>
              <AutomaticScrollButtons tabData={tabData} />
            </Hidden>
          </Route>
          <Route path="/buttons"></Route>
          <Route path="/users"></Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
