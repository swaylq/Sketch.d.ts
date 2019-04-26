/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionViewItemDelegateProtocol<T0 = void, T1 = void, T2 = void> extends MSPreviewColorSpaceProviderProtocol {
    assetItemDidEndRenaming<R = void, P0 = MSAssetCollectionViewItem>(_assetItemDidEndRenaming: P0): R;
    assetItem_wantsRenameTo<R = void, P0 = MSAssetCollectionViewItem, P1 = NSString>(_assetItem: P0, _wantsRenameTo: P1): R;
    assetItemWantsStartRenaming<R = void, P0 = MSAssetCollectionViewItem>(_assetItemWantsStartRenaming: P0): R;
    deleteAssetItem<R = void, P0 = MSAssetCollectionViewItem>(_deleteAssetItem: P0): R;
    assetItemIsEditable<R = boolean, P0 = MSAssetCollectionViewItem>(_assetItemIsEditable: P0): R;
    assetItem_copyToCollection<R = void, P0 = MSAssetCollectionViewItem, P1 = MSAssetCollectionViewDataSource>(_assetItem: P0, _copyToCollection: P1): R;
    assetItem_moveToCollection<R = void, P0 = MSAssetCollectionViewItem, P1 = MSAssetCollectionViewDataSource>(_assetItem: P0, _moveToCollection: P1): R;
  }
  namespace MSAssetCollectionViewItemDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPreviewColorSpaceProviderProtocol {}
  }
}
