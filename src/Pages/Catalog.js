import React from "react";
import '../App.css';
import {ActionCard, SideBar} from '../ui-components'

function Catalog() {

  return (
    <div className="App">
      <div className="container">
        <div className="Sidebar">
        <SideBar  />
        </div>
        <div className="Collection"/>
          <ActionCard className="ActionCard" />
        </div>
      </div>
  );
}

export default Catalog;