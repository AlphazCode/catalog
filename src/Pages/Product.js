import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Product} from '../models'
//import {NavBar} from '../ui-components'
import '../App.css';
import {ItemCardCollection, ProductInfo } from "../ui-components";
import { DataStore } from "aws-amplify";
function Products() {
    const params = useParams();
    /*const [item, setItem] = useState();
    const getItem = async () => {
      const items = await DataStore.query(Product, c=>c.id("eq", params.id))//.then(item => {return item})  
      if(items !== undefined) setItem(items[0]);
    };
    useEffect(() => {
      setTimeout(getItem, 500);
    }, []);*/
    /*const params = useParams();
    const [item, setItem] = useState();
    const [category, setCategory] = useState(); 
    const [package_type, setPackage] = useState();
    const getItem = async () => {
      const items = await DataStore.query(Drink, c=>c.id("eq", params.id))//.then(item => {return item})
      const packages = await DataStore.query(PackageType, c=>c.id("eq", items[0].packagetypeID))//.then(item => {return item})   
      const categories = await DataStore.query(Category, c=>c.id("eq", items[0].categoryID))//.then(item => {return item})   
      if(items !== undefined) setItem(items[0]);
      if(categories !== undefined)setCategory(categories[0].name)
      if(packages !== undefined)setPackage(packages[0].name);
    };
    useEffect(() => {
      setTimeout(getItem, 500);
    }, []);
    if(package_type === undefined && category === undefined && item === undefined){
      return null
    }
    if(item === undefined)console.log(item)
    const detailOverride= {
      "image":{
        src:item.image_url
      },
      "Rating29766970":{
        children:item.rating
      },
      "CategoryType":{
        children:category
      },
      "Volume":{
        children:item.volume
      },
      "PackageType":{
        children:package_type
      },
      "Alcohol":{
        children:item.alcohol
      },
      "Name":{
        children:item.name
      },
      "Description":{
        children:item.description
      }
    }*/
    return (
      <div className="App">
          <div className="ProductDetails">
            <ProductInfo product={params}></ProductInfo>
              <ItemCardCollection product={params}></ItemCardCollection>
          </div>
        </div>
    );
  }

export default Products;