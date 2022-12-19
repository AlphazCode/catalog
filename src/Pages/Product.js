import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../App.css';
import {ItemCardCollection, ProductInfo } from "../ui-components";
import {Auth} from '@aws-amplify/auth';
import { getProduct, getOffer } from "../DataStoreResolvers";
function Products() {
    const params = useParams();
    const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    AssessLoggedInstate()
  }, [])
  const AssessLoggedInstate = () =>{
    Auth.currentAuthenticatedUser().then(() =>{
      setLoggedIn(true)}
    ).catch(()=>{
      setLoggedIn(false)
    })
  }
    
  const [product, setProduct] = React.useState();
  const [offer, setOffer] = React.useState();

  setTimeout(function() {getOffer(params.id).then(r => {if(offer === undefined)setOffer(r)})}, 100);
  setTimeout(function() {getProduct(params.id).then(r => {if(product === undefined)setProduct(r)})}, 100);

    const collectionOverrides ={
      "ItemCardCollection":{     
        margin: "auto",
        align:"center"
      }
    }
    const ProductInfoNotSigned={
      "Frame 430":{
        display:"none"
      },
      
    }
    const ProductInfoSigned={
      "Frame 431":{
        display:"none"
      }
    }
    return (
      <div className="App">
          <div className="ProductDetails">
            <ProductInfo product={product} overrides={loggedIn ? ProductInfoSigned : ProductInfoNotSigned}></ProductInfo>
              <ItemCardCollection items={offer} provider={"item.provider === undefined ? 0 : item.provider[0]"} overrides={collectionOverrides}></ItemCardCollection>
          </div>
        </div>
    );
  }

export default Products;