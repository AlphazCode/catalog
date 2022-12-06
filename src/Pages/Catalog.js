import React from "react";
import '../App.css';
import { Category, CategoryCollection, ProductCardCollection, SideBar} from '../ui-components'

function Catalog() {
  const CollectionOverride = {

  }
  return (
  <div className="App">
    <div className="container">
      <CategoryCollection></CategoryCollection>
      <div className="Collection">
        <ProductCardCollection className="tallCardCollection" />
      </div>
    </div>
  </div>
  );
}

export default Catalog;