import React from "react";
import '../App.css';
import { Category, CategoryCollection, ProductCardCollection, SideBar} from '../ui-components'

function Catalog() {
  var ProductCardCollectionOverrides = {
    "ProductCardCollection":{
      padding:"40px"
    }
  }
  return (
  <div className="App">
    <div className="container">
      <CategoryCollection></CategoryCollection>
      <div className="Collection">
        <ProductCardCollection overrides={ProductCardCollectionOverrides} className="tallCardCollection" />
      </div>
    </div>
  </div>
  );
}

export default Catalog;