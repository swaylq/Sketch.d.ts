/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionViewDataSource<T0 = void, T1 = void, T2 = void> extends NSObject, NSCollectionViewDataSourceProtocol {
    cxx_destruct<R = void>(): R;
    markUpdatedIndexesAsRead<R = void>(): R;
    getUpdatedIndexes<R = void, P0 = CDUnknownBlockType>(_getUpdatedIndexes: P0): R;
    moveAssetAtIndexPath_toIndexPath<R = void, P0 = unknown, P1 = unknown>(_moveAssetAtIndexPath: P0, _toIndexPath: P1): R;
    highlightAsset_inCollectionView<R = void, P0 = unknown, P1 = unknown>(_highlightAsset: P0, _inCollectionView: P1): R;
    deleteAssetAtIndexPath<R = void, P0 = unknown>(_deleteAssetAtIndexPath: P0): R;
    nameOfAssetAtIndexPath<R = unknown, P0 = unknown>(_nameOfAssetAtIndexPath: P0): R;
    setName_ofAssetAtIndexPath<R = void, P0 = unknown, P1 = unknown>(_setName: P0, _ofAssetAtIndexPath: P1): R;
    addAsset<R = unknown, P0 = unknown>(_addAsset: P0): R;
    assetAtIndex<R = unknown, P0 = number>(_assetAtIndex: P0): R;
    numberOfAssets<R = number>(): R;
    prepareCollectionView<R = void, P0 = unknown>(_prepareCollectionView: P0): R;
    collectionDidMutate<R = void>(): R;
    pasteboardRepresentationForIndexPath<R = unknown, P0 = unknown>(_pasteboardRepresentationForIndexPath: P0): R;
    registerDraggedTypesForCollectionView<R = void, P0 = unknown>(_registerDraggedTypesForCollectionView: P0): R;
    initWithAssetCollection_assetType_identifier_name_title_isLibrary_delegate<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown, P4 = unknown, P5 = boolean, P6 = unknown>(_initWithAssetCollection: P0, _assetType: P1, _identifier: P2, _name: P3, _title: P4, _isLibrary: P5, _delegate: P6): R;
    cachedHighlightedIndexes<R = NSIndexSet>(): R;
    setCachedHighlightedIndexes<R = void, P0 = NSIndexSet>(_v: P0): R;
    highlightedAsset<R = MSAsset>(): R;
    setHighlightedAsset<R = void, P0 = MSAsset>(_v: P0): R;
    assetCollection<R = MSAssetCollection>(): R;
    setAssetCollection<R = void, P0 = MSAssetCollection>(_v: P0): R;
    itemProvider<R = MSAssetCollectionViewSourceItemProvider>(): R;
    setItemProvider<R = void, P0 = MSAssetCollectionViewSourceItemProvider>(_v: P0): R;
    delegate<R = MSAssetCollectionViewSourceDelegate>(): R;
    setDelegate<R = void, P0 = MSAssetCollectionViewSourceDelegate>(_v: P0): R;
    isLibrary<R = boolean>(): R;
    setIsLibrary<R = void, P0 = boolean>(_v: P0): R;
    title<R = NSString>(): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    assetType<R = number>(): R;
    setAssetType<R = void, P0 = number>(_v: P0): R;
    editable<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAssetCollectionViewDataSource {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCollectionViewDataSourceProtocol {
      alloc<R = MSAssetCollectionViewDataSource>(): R;
      new: <R = MSAssetCollectionViewDataSource>() => R;
      pasteboardTypeForAssetType<R = unknown, P0 = number>(_pasteboardTypeForAssetType: P0): R;
      pasteboardRepresentationForAsset_ofType<R = unknown, P0 = unknown, P1 = number>(_pasteboardRepresentationForAsset: P0, _ofType: P1): R;
    }
  }
}

declare const MSAssetCollectionViewDataSource: cocoa.MSAssetCollectionViewDataSource.CLASS;
