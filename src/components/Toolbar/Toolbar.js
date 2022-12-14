import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
    <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
      <div className="container">
        <div className="toolbar-item"></div>
        <div className="toolbar-item"></div>
      </div>
    </nav>
  </header>
);

export default toolbar;
