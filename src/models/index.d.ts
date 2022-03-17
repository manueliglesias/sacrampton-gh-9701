import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AssetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PackageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly asset?: Asset;
  readonly assetName?: string;
  readonly package?: Package;
  readonly packageName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Asset {
  readonly id: string;
  readonly name: string;
  readonly package?: Package;
  readonly packageName?: string;
  readonly user?: (User | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Asset, AssetMetaData>);
  static copyOf(source: Asset, mutator: (draft: MutableModel<Asset, AssetMetaData>) => MutableModel<Asset, AssetMetaData> | void): Asset;
}

export declare class Package {
  readonly id: string;
  readonly name: string;
  readonly asset?: (Asset | null)[];
  readonly user?: (User | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Package, PackageMetaData>);
  static copyOf(source: Package, mutator: (draft: MutableModel<Package, PackageMetaData>) => MutableModel<Package, PackageMetaData> | void): Package;
}