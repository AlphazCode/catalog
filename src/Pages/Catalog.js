import React from "react";
import '../App.css';
import { Category, CategoryCollection, ProductCardCollection, SideBar} from '../ui-components'

import { getProductByCategory } from "../DataStoreResolvers";
import { useParams } from "react-router-dom";

function Catalog() {
  const params = useParams();
  const [product, setProduct] = React.useState();

  setTimeout(function() {getProductByCategory(params.id).then(r => {if(product === undefined)setProduct(r)})}, 500);
    var items;
    if(params.id !== undefined){
      items = product
    }
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
        <ProductCardCollection overrides={ProductCardCollectionOverrides} items={items} className="tallCardCollection" />
      </div>
    </div>
  </div>
  );
}

export default Catalog;