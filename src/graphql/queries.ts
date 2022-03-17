/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        asset {
          id
          name
          assetPackageId
          packageName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userAssetId
        assetName
        package {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userPackageId
        packageName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      asset {
        id
        name
        package {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        assetPackageId
        packageName
        user {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      userAssetId
      assetName
      package {
        id
        name
        asset {
          nextToken
          startedAt
        }
        user {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      userPackageId
      packageName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        asset {
          id
          name
          assetPackageId
          packageName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userAssetId
        assetName
        package {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userPackageId
        packageName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAssets = /* GraphQL */ `
  query SyncAssets(
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        package {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        assetPackageId
        packageName
        user {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAsset = /* GraphQL */ `
  query GetAsset($id: ID!) {
    getAsset(id: $id) {
      id
      name
      package {
        id
        name
        asset {
          nextToken
          startedAt
        }
        user {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      assetPackageId
      packageName
      user {
        items {
          id
          name
          userAssetId
          assetName
          userPackageId
          packageName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listAssets = /* GraphQL */ `
  query ListAssets(
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        package {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        assetPackageId
        packageName
        user {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPackages = /* GraphQL */ `
  query SyncPackages(
    $filter: ModelPackageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPackages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        asset {
          nextToken
          startedAt
        }
        user {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPackage = /* GraphQL */ `
  query GetPackage($id: ID!) {
    getPackage(id: $id) {
      id
      name
      asset {
        items {
          id
          name
          assetPackageId
          packageName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      user {
        items {
          id
          name
          userAssetId
          assetName
          userPackageId
          packageName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPackages = /* GraphQL */ `
  query ListPackages(
    $filter: ModelPackageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        asset {
          nextToken
          startedAt
        }
        user {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
