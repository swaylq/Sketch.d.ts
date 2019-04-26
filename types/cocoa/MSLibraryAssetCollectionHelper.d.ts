/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLibraryAssetCollectionHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    readLastReadAssetsIfNecessary<R = void, P0 = CDUnknownBlockType>(_readLastReadAssetsIfNecessary: P0): R;
    updateNewIndexesIfNecessary<R = void, P0 = CDUnknownBlockType>(_updateNewIndexesIfNecessary: P0): R;
    markCollectionAsRead<R = void, P0 = CDUnknownBlockType>(_markCollectionAsRead: P0): R;
    getIndexesOfNewAssets<R = void, P0 = CDUnknownBlockType>(_getIndexesOfNewAssets: P0): R;
    initWithCollection_libraryIdentifier_name_assetType_dataURL_ioQueue<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown, P5 = unknown>(_initWithCollection: P0, _libraryIdentifier: P1, _name: P2, _assetType: P3, _dataURL: P4, _ioQueue: P5): R;
    collectionViewSourceMarkUpdatedIndexesAsRead<R = void, P0 = unknown>(_collectionViewSourceMarkUpdatedIndexesAsRead: P0): R;
    collectionViewSourceDidMutate<R = void, P0 = unknown>(_collectionViewSourceDidMutate: P0): R;
    collectionViewSource_getUpdatedIndexes<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_collectionViewSource: P0, _getUpdatedIndexes: P1): R;
    dataSource<R = unknown>(): R;
    markedAsRead<R = boolean>(): R;
    setMarkedAsRead<R = void, P0 = boolean>(_v: P0): R;
    updatedIndexes<R = NSIndexSet>(): R;
    setUpdatedIndexes<R = void, P0 = NSIndexSet>(_v: P0): R;
    lastReadData<R = unknown>(): R;
    setLastReadData<R = void, P0 = unknown>(_v: P0): R;
    dispatchQueue<R = OS_dispatch_queue>(): R;
    setDispatchQueue<R = void, P0 = OS_dispatch_queue>(_v: P0): R;
    dataURL<R = NSURL>(): R;
    setDataURL<R = void, P0 = NSURL>(_v: P0): R;
    assetType<R = number>(): R;
    setAssetType<R = void, P0 = number>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    assetCollection<R = MSImmutableAssetCollection>(): R;
    setAssetCollection<R = void, P0 = MSImmutableAssetCollection>(_v: P0): R;
    libraryIdentifier<R = NSString>(): R;
    setLibraryIdentifier<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSLibraryAssetCollectionHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLibraryAssetCollectionHelper>(): R;
      new: <R = MSLibraryAssetCollectionHelper>() => R;
      hashableRepresentationForAsset_withName<R = unknown, P0 = unknown, P1 = unknown>(_hashableRepresentationForAsset: P0, _withName: P1): R;
      gatherSetForType_fromCollection_andWriteToURL<R = void, P0 = number, P1 = unknown, P2 = unknown>(_gatherSetForType: P0, _fromCollection: P1, _andWriteToURL: P2): R;
      readSetFromURL<R = unknown, P0 = unknown>(_readSetFromURL: P0): R;
      indexesOfAssetsInCollection_ofType_notContainedIn<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_indexesOfAssetsInCollection: P0, _ofType: P1, _notContainedIn: P2): R;
    }
  }
}

declare const MSLibraryAssetCollectionHelper: cocoa.MSLibraryAssetCollectionHelper.CLASS;
