/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Category, Product } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ProductCard from "./ProductCard";
import { Collection } from "@aws-amplify/ui-react";

import getProduct, { getProductByCategory } from "../DataStoreResolvers";
import { useParams } from "react-router-dom";
export default function ProductCardCollectionStable(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  
  const params = useParams();
  const [product, setProduct] = React.useState();
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Product,
  }).items;
  const productCardOverrides ={
    "image":{
      "width": "100%",
      height: "100%",
      display: "inline-block",
      margin: "auto",
      position:"absolute",
      padding:"10px",
      top:"0",
      bottom:"0"

    }
  }
  setTimeout(function() {getProductByCategory(params.id).then(r => {if(product === undefined)setProduct(r)})}, 500);
  var items;
  if(params.id !== undefined){
     items = product
  }
  else{
     items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  }
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={12}
      templateColumns="1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ProductCardCollection")}
    >
      {(item, index) => (
        <ProductCard
          product={item}
          key={item.id}
          overrides={productCardOverrides}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ProductCard>
      )}
    </Collection>
  );
}
