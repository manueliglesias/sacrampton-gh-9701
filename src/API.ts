/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  userAssetId?: string | null,
  assetName?: string | null,
  userPackageId?: string | null,
  packageName?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  userAssetId?: ModelIDInput | null,
  assetName?: ModelStringInput | null,
  userPackageId?: ModelIDInput | null,
  packageName?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  asset?: Asset | null,
  userAssetId?: string | null,
  assetName?: string | null,
  package?: Package | null,
  userPackageId?: string | null,
  packageName?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type Asset = {
  __typename: "Asset",
  id: string,
  name: string,
  package?: Package | null,
  assetPackageId?: string | null,
  packageName?: string | null,
  user?: ModelUserConnection | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type Package = {
  __typename: "Package",
  id: string,
  name: string,
  asset?: ModelAssetConnection | null,
  user?: ModelUserConnection | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type ModelAssetConnection = {
  __typename: "ModelAssetConnection",
  items:  Array<Asset | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  userAssetId?: string | null,
  assetName?: string | null,
  userPackageId?: string | null,
  packageName?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateAssetInput = {
  id?: string | null,
  name: string,
  assetPackageId?: string | null,
  packageName?: string | null,
  _version?: number | null,
};

export type ModelAssetConditionInput = {
  name?: ModelStringInput | null,
  assetPackageId?: ModelIDInput | null,
  packageName?: ModelStringInput | null,
  and?: Array< ModelAssetConditionInput | null > | null,
  or?: Array< ModelAssetConditionInput | null > | null,
  not?: ModelAssetConditionInput | null,
};

export type UpdateAssetInput = {
  id: string,
  name?: string | null,
  assetPackageId?: string | null,
  packageName?: string | null,
  _version?: number | null,
};

export type DeleteAssetInput = {
  id: string,
  _version?: number | null,
};

export type CreatePackageInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelPackageConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPackageConditionInput | null > | null,
  or?: Array< ModelPackageConditionInput | null > | null,
  not?: ModelPackageConditionInput | null,
};

export type UpdatePackageInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeletePackageInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userAssetId?: ModelIDInput | null,
  assetName?: ModelStringInput | null,
  userPackageId?: ModelIDInput | null,
  packageName?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelAssetFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  assetPackageId?: ModelIDInput | null,
  packageName?: ModelStringInput | null,
  and?: Array< ModelAssetFilterInput | null > | null,
  or?: Array< ModelAssetFilterInput | null > | null,
  not?: ModelAssetFilterInput | null,
};

export type ModelPackageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPackageFilterInput | null > | null,
  or?: Array< ModelPackageFilterInput | null > | null,
  not?: ModelPackageFilterInput | null,
};

export type ModelPackageConnection = {
  __typename: "ModelPackageConnection",
  items:  Array<Package | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    asset?:  {
      __typename: "Asset",
      id: string,
      name: string,
      package?:  {
        __typename: "Package",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assetPackageId?: string | null,
      packageName?: string | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userAssetId?: string | null,
    assetName?: string | null,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPackageId?: string | null,
    packageName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    asset?:  {
      __typename: "Asset",
      id: string,
      name: string,
      package?:  {
        __typename: "Package",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assetPackageId?: string | null,
      packageName?: string | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userAssetId?: string | null,
    assetName?: string | null,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPackageId?: string | null,
    packageName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    asset?:  {
      __typename: "Asset",
      id: string,
      name: string,
      package?:  {
        __typename: "Package",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assetPackageId?: string | null,
      packageName?: string | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userAssetId?: string | null,
    assetName?: string | null,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPackageId?: string | null,
    packageName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAssetMutationVariables = {
  input: CreateAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type CreateAssetMutation = {
  createAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    assetPackageId?: string | null,
    packageName?: string | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAssetMutationVariables = {
  input: UpdateAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type UpdateAssetMutation = {
  updateAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    assetPackageId?: string | null,
    packageName?: string | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAssetMutationVariables = {
  input: DeleteAssetInput,
  condition?: ModelAssetConditionInput | null,
};

export type DeleteAssetMutation = {
  deleteAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    assetPackageId?: string | null,
    packageName?: string | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePackageMutationVariables = {
  input: CreatePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type CreatePackageMutation = {
  createPackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    asset?:  {
      __typename: "ModelAssetConnection",
      items:  Array< {
        __typename: "Asset",
        id: string,
        name: string,
        assetPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePackageMutationVariables = {
  input: UpdatePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type UpdatePackageMutation = {
  updatePackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    asset?:  {
      __typename: "ModelAssetConnection",
      items:  Array< {
        __typename: "Asset",
        id: string,
        name: string,
        assetPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePackageMutationVariables = {
  input: DeletePackageInput,
  condition?: ModelPackageConditionInput | null,
};

export type DeletePackageMutation = {
  deletePackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    asset?:  {
      __typename: "ModelAssetConnection",
      items:  Array< {
        __typename: "Asset",
        id: string,
        name: string,
        assetPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      asset?:  {
        __typename: "Asset",
        id: string,
        name: string,
        assetPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userAssetId?: string | null,
      assetName?: string | null,
      package?:  {
        __typename: "Package",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPackageId?: string | null,
      packageName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    asset?:  {
      __typename: "Asset",
      id: string,
      name: string,
      package?:  {
        __typename: "Package",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assetPackageId?: string | null,
      packageName?: string | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userAssetId?: string | null,
    assetName?: string | null,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPackageId?: string | null,
    packageName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      asset?:  {
        __typename: "Asset",
        id: string,
        name: string,
        assetPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userAssetId?: string | null,
      assetName?: string | null,
      package?:  {
        __typename: "Package",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPackageId?: string | null,
      packageName?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAssetsQueryVariables = {
  filter?: ModelAssetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAssetsQuery = {
  syncAssets?:  {
    __typename: "ModelAssetConnection",
    items:  Array< {
      __typename: "Asset",
      id: string,
      name: string,
      package?:  {
        __typename: "Package",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assetPackageId?: string | null,
      packageName?: string | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAssetQueryVariables = {
  id: string,
};

export type GetAssetQuery = {
  getAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    assetPackageId?: string | null,
    packageName?: string | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAssetsQueryVariables = {
  filter?: ModelAssetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssetsQuery = {
  listAssets?:  {
    __typename: "ModelAssetConnection",
    items:  Array< {
      __typename: "Asset",
      id: string,
      name: string,
      package?:  {
        __typename: "Package",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assetPackageId?: string | null,
      packageName?: string | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPackagesQueryVariables = {
  filter?: ModelPackageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPackagesQuery = {
  syncPackages?:  {
    __typename: "ModelPackageConnection",
    items:  Array< {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPackageQueryVariables = {
  id: string,
};

export type GetPackageQuery = {
  getPackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    asset?:  {
      __typename: "ModelAssetConnection",
      items:  Array< {
        __typename: "Asset",
        id: string,
        name: string,
        assetPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPackagesQueryVariables = {
  filter?: ModelPackageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPackagesQuery = {
  listPackages?:  {
    __typename: "ModelPackageConnection",
    items:  Array< {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    asset?:  {
      __typename: "Asset",
      id: string,
      name: string,
      package?:  {
        __typename: "Package",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assetPackageId?: string | null,
      packageName?: string | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userAssetId?: string | null,
    assetName?: string | null,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPackageId?: string | null,
    packageName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    asset?:  {
      __typename: "Asset",
      id: string,
      name: string,
      package?:  {
        __typename: "Package",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assetPackageId?: string | null,
      packageName?: string | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userAssetId?: string | null,
    assetName?: string | null,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPackageId?: string | null,
    packageName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    asset?:  {
      __typename: "Asset",
      id: string,
      name: string,
      package?:  {
        __typename: "Package",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      assetPackageId?: string | null,
      packageName?: string | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userAssetId?: string | null,
    assetName?: string | null,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPackageId?: string | null,
    packageName?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAssetSubscription = {
  onCreateAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    assetPackageId?: string | null,
    packageName?: string | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAssetSubscription = {
  onUpdateAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    assetPackageId?: string | null,
    packageName?: string | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAssetSubscription = {
  onDeleteAsset?:  {
    __typename: "Asset",
    id: string,
    name: string,
    package?:  {
      __typename: "Package",
      id: string,
      name: string,
      asset?:  {
        __typename: "ModelAssetConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      user?:  {
        __typename: "ModelUserConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    assetPackageId?: string | null,
    packageName?: string | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePackageSubscription = {
  onCreatePackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    asset?:  {
      __typename: "ModelAssetConnection",
      items:  Array< {
        __typename: "Asset",
        id: string,
        name: string,
        assetPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePackageSubscription = {
  onUpdatePackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    asset?:  {
      __typename: "ModelAssetConnection",
      items:  Array< {
        __typename: "Asset",
        id: string,
        name: string,
        assetPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePackageSubscription = {
  onDeletePackage?:  {
    __typename: "Package",
    id: string,
    name: string,
    asset?:  {
      __typename: "ModelAssetConnection",
      items:  Array< {
        __typename: "Asset",
        id: string,
        name: string,
        assetPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    user?:  {
      __typename: "ModelUserConnection",
      items:  Array< {
        __typename: "User",
        id: string,
        name: string,
        userAssetId?: string | null,
        assetName?: string | null,
        userPackageId?: string | null,
        packageName?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
