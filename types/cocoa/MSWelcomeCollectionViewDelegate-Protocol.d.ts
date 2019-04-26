/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSCollectionViewDelegateProtocol {
    collectionView_newItemForRepresentedObject<R = NSCollectionViewItem, P0 = NSCollectionView, P1 = unknown>(_collectionView: P0, _newItemForRepresentedObject: P1): R;
  }
  namespace MSWelcomeCollectionViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewDelegateProtocol {}
  }
}
