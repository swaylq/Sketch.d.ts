/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionViewSourceDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    collectionViewSourceDidMutate<R = void, P0 = MSAssetCollectionViewDataSource>(_collectionViewSourceDidMutate: P0): R;
    collectionViewSourceMarkUpdatedIndexesAsRead<R = void, P0 = MSAssetCollectionViewDataSource>(_collectionViewSourceMarkUpdatedIndexesAsRead: P0): R;
    collectionViewSource_getUpdatedIndexes<R = void, P0 = MSAssetCollectionViewDataSource, P1 = CDUnknownBlockType>(_collectionViewSource: P0, _getUpdatedIndexes: P1): R;
  }
  namespace MSAssetCollectionViewSourceDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
