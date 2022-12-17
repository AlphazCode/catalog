/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Offers } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import ItemCard from "./ItemCard";
import { Collection } from "@aws-amplify/ui-react";
import getOffer from "../DataStoreResolvers";
export default function ItemCardCollection(props) {
  const { items: itemsProp, product, overrideItems, overrides, ...rest } = props;
  const [offer, setOffer] = React.useState();
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Offers,
  }).items;
  
  setTimeout(function() {getOffer(product.id).then(r => {if(offer === undefined)setOffer(r)})}, 500);
  
  const items = offer;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ItemCardCollection")}
    >
      {(item, index) => (
        <ItemCard
          offers={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ItemCard>
      )}
    </Collection>
  );
}
