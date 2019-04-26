/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLibraryAssetCollectionsController<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dataSourceWithIdentifier_forAssetType<R = unknown, P0 = unknown, P1 = number>(_dataSourceWithIdentifier: P0, _forAssetType: P1): R;
    dataSourcesWithContentForAssetType<R = unknown, P0 = number>(_dataSourcesWithContentForAssetType: P0): R;
    dataSourcesForAssetType<R = unknown, P0 = number>(_dataSourcesForAssetType: P0): R;
    refreshHelpersForLibrary<R = void, P0 = unknown>(_refreshHelpersForLibrary: P0): R;
    refreshAllHelpers<R = void>(): R;
    reload<R = void>(): R;
    libraryDidChange<R = void, P0 = unknown>(_libraryDidChange: P0): R;
    allHelpers<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithAssetLibraryController<R = unknown, P0 = unknown>(_initWithAssetLibraryController: P0): R;
    supportedAssetTypes<R = NSArray>(): R;
    setSupportedAssetTypes<R = void, P0 = NSArray>(_v: P0): R;
    collectionInfoDictionary<R = NSMutableDictionary>(): R;
    setCollectionInfoDictionary<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    libraryController<R = MSAssetLibraryController>(): R;
    setLibraryController<R = void, P0 = MSAssetLibraryController>(_v: P0): R;
  }
  namespace MSLibraryAssetCollectionsController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLibraryAssetCollectionsController>(): R;
      new: <R = MSLibraryAssetCollectionsController>() => R;
      lastReadAssetsDataContainer<R = unknown>(): R;
      dataURLForLibraryIdentifier_assetKind<R = unknown, P0 = unknown, P1 = number>(_dataURLForLibraryIdentifier: P0, _assetKind: P1): R;
      containerDataURLForLibraryIdentifier<R = unknown, P0 = unknown>(_containerDataURLForLibraryIdentifier: P0): R;
      identifierForLibrary<R = unknown, P0 = unknown>(_identifierForLibrary: P0): R;
      cleanupPersistedHashesNotIncludedInHelpersInBackground<R = void, P0 = unknown>(_cleanupPersistedHashesNotIncludedInHelpersInBackground: P0): R;
      dispatchQueue<R = unknown>(): R;
    }
  }
}

declare const MSLibraryAssetCollectionsController: cocoa.MSLibraryAssetCollectionsController.CLASS;
