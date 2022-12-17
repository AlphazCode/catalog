import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Product} from '../models'
//import {NavBar} from '../ui-components'
import '../App.css';
import {ItemCardCollection, ProductInfo } from "../ui-components";
import { DataStore } from "aws-amplify";
import {Auth} from '@aws-amplify/auth';
import { getProduct, getOffer, getOfferByProductID } from "../DataStoreResolvers";
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
  console.log(loggedIn);
    
  const [product, setProduct] = React.useState();
  const [offer, setOffer] = React.useState();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  setTimeout(function() {getOffer(params.id).then(r => {if(offer === undefined)setOffer(r)})}, 100);
  setTimeout(function() {getProduct(params.id).then(r => {if(product === undefined)setProduct(r)})}, 100);

    const collectionOverrides ={
      "ItemCardCollection":{     
        margin: "auto",
        align:"center"
      }
    }
    const ProductInfoSigned={
      "Frame 430":{
        display:"none"
      }
    }
    const ProductInfoNotSigned={
      "Frame 431":{
        display:"none"
      }
    }
    return (
      <div className="App">
          <div className="ProductDetails">
            <ProductInfo product={product} overrides={loggedIn ? ProductInfoSigned : ProductInfoNotSigned}></ProductInfo>
              <ItemCardCollection items={offer} overrides={collectionOverrides}></ItemCardCollection>
          </div>
        </div>
    );
  }

export default Products;