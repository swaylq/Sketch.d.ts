/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewDataSourceProtocol<T0 = void, T1 = void, T2 = void> {
    collectionView_itemForRepresentedObjectAtIndexPath<R = NSCollectionViewItem, P0 = NSCollectionView, P1 = NSIndexPath>(_collectionView: P0, _itemForRepresentedObjectAtIndexPath: P1): R;
    collectionView_numberOfItemsInSection<R = number, P0 = NSCollectionView, P1 = number>(_collectionView: P0, _numberOfItemsInSection: P1): R;
    collectionView_viewForSupplementaryElementOfKind_atIndexPath<R = NSView, P0 = NSCollectionView, P1 = NSString, P2 = NSIndexPath>(_collectionView: P0, _viewForSupplementaryElementOfKind: P1, _atIndexPath: P2): R;
    numberOfSectionsInCollectionView<R = number, P0 = NSCollectionView>(_numberOfSectionsInCollectionView: P0): R;
  }
  namespace NSCollectionViewDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
