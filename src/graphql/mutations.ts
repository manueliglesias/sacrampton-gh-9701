/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAsset = /* GraphQL */ `
  mutation CreateAsset(
    $input: CreateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    createAsset(input: $input, condition: $condition) {
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
export const updateAsset = /* GraphQL */ `
  mutation UpdateAsset(
    $input: UpdateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    updateAsset(input: $input, condition: $condition) {
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
export const deleteAsset = /* GraphQL */ `
  mutation DeleteAsset(
    $input: DeleteAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    deleteAsset(input: $input, condition: $condition) {
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
export const createPackage = /* GraphQL */ `
  mutation CreatePackage(
    $input: CreatePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    createPackage(input: $input, condition: $condition) {
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
export const updatePackage = /* GraphQL */ `
  mutation UpdatePackage(
    $input: UpdatePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    updatePackage(input: $input, condition: $condition) {
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
export const deletePackage = /* GraphQL */ `
  mutation DeletePackage(
    $input: DeletePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    deletePackage(input: $input, condition: $condition) {
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
