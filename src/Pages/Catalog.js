import React from "react";
import '../App.css';
import { ProductCardCollection, SideBar} from '../ui-components'

function Catalog() {
  const CollectionOverride = {

  }
  return (
  <div className="App">
    <div className="container">
      <div className="Collection">
        <ProductCardCollection className="tallCardCollection" />
      </div>
    </div>
  </div>
  );
}

export default Catalog;