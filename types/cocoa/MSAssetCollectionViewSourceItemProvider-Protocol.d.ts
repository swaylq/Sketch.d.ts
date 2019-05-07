/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionViewSourceItemProviderProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    collectionViewSource_vendSupplementaryViewOfKind_forIndexPath<R = NSView, P0 = MSAssetCollectionViewDataSource, P1 = NSString, P2 = NSIndexPath>(_collectionViewSource: P0, _vendSupplementaryViewOfKind: P1, _forIndexPath: P2): R;
    collectionViewSource_vendItemForIndexPath_asset_name_highlighted<R = NSCollectionViewItem, P0 = MSAssetCollectionViewDataSource, P1 = NSIndexPath, P2 = MSAsset, P3 = NSString, P4 = boolean>(_collectionViewSource: P0, _vendItemForIndexPath: P1, _asset: P2, _name: P3, _highlighted: P4): R;
  }
  namespace MSAssetCollectionViewSourceItemProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
