// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Asset, Package } = initSchema(schema);

export {
  User,
  Asset,
  Package
};