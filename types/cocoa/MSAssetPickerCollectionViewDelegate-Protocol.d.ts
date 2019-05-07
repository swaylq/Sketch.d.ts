/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerCollectionViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSCollectionViewDelegateProtocol {
    collectionView_didDoubleClickWithEvent_item<R = void, P0 = NSCollectionView, P1 = NSEvent, P2 = NSCollectionViewItem>(_collectionView: P0, _didDoubleClickWithEvent: P1, _item: P2): R;
  }
  namespace MSAssetPickerCollectionViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewDelegateProtocol {}
  }
}
