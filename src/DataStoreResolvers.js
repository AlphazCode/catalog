import { DataStore } from "aws-amplify";
import { Category, Offers, Product, Provider } from "./models";


async function  getOfferByProductID(productID){
    return await DataStore.query(Offers, c => c.productID.eq(productID))   
}

const getOffer = async (productID) => {  

    var obj = []
    var offers = await getOfferByProductID(productID);
    for (var key in offers) {
        const provider = await DataStore.query(Provider, c => c.id.eq(offers[key].offersProviderId))
        var res = Object.assign({},offers[key], {"provider":provider})
        obj.push(res)
    }
    return obj
    
}

export async function  getProduct (productID) {  
    const product = await DataStore.query(Product,productID)
    return product
}

export async function  getCommentByProductID(productID){
    return await DataStore.query(Comment, c => c.eq(productID))   
}

export async function  getCategory () {  
    const product = await DataStore.query(Category)
    return product
}

export async function  getCategory (categoryID) {  
    const product = await DataStore.query(Category, categoryID)
    return product
}

export default getOffer