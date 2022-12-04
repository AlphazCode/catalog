// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Provider, Product, Category, Offers, SysInfo } = initSchema(schema);

export {
  Comment,
  Provider,
  Product,
  Category,
  Offers,
  SysInfo
};