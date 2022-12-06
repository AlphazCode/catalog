/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Product, Provider } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ProductCard from "./ProductCard";
import { Collection } from "@aws-amplify/ui-react";
export default function ProductCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Product,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  console.log(items)
  return (
    <Collection
    type="grid"
    isPaginated={true}
    searchPlaceholder="Search..."
    itemsPerPage={9}
    templateColumns="1fr 1fr 1fr"
    autoFlow="row"
    alignItems="left"
    justifyContent="left"
    items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ProductCardCollection")}
    >
      {(item, index) => (
        <ProductCard
          key={item.id}
          product = {item}
          height="auto"
          width="auto"
          margin="1rem 1rem 1rem 1rem"
          padding="1rem 1rem 1rem 1rem"
          {...(overrideItems && overrideItems({ item, index }))}
        ></ProductCard>
      )}
    </Collection>
  );
}
