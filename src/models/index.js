// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PriceHistory, Product, Category, Offers, Provider, Wishlist, SysInfo } = initSchema(schema);

export {
  PriceHistory,
  Product,
  Category,
  Offers,
  Provider,
  Wishlist,
  SysInfo
};