/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateAsset = /* GraphQL */ `
  subscription OnCreateAsset {
    onCreateAsset {
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
export const onUpdateAsset = /* GraphQL */ `
  subscription OnUpdateAsset {
    onUpdateAsset {
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
export const onDeleteAsset = /* GraphQL */ `
  subscription OnDeleteAsset {
    onDeleteAsset {
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
export const onCreatePackage = /* GraphQL */ `
  subscription OnCreatePackage {
    onCreatePackage {
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
export const onUpdatePackage = /* GraphQL */ `
  subscription OnUpdatePackage {
    onUpdatePackage {
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
export const onDeletePackage = /* GraphQL */ `
  subscription OnDeletePackage {
    onDeletePackage {
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
