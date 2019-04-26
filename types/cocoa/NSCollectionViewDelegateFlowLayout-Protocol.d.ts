/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewDelegateFlowLayoutProtocol<T0 = void, T1 = void, T2 = void> extends NSCollectionViewDelegateProtocol {
    collectionView_layout_referenceSizeForFooterInSection<R = CGSize, P0 = NSCollectionView, P1 = NSCollectionViewLayout, P2 = number>(_collectionView: P0, _layout: P1, _referenceSizeForFooterInSection: P2): R;
    collectionView_layout_referenceSizeForHeaderInSection<R = CGSize, P0 = NSCollectionView, P1 = NSCollectionViewLayout, P2 = number>(_collectionView: P0, _layout: P1, _referenceSizeForHeaderInSection: P2): R;
    collectionView_layout_minimumInteritemSpacingForSectionAtIndex<R = number, P0 = NSCollectionView, P1 = NSCollectionViewLayout, P2 = number>(_collectionView: P0, _layout: P1, _minimumInteritemSpacingForSectionAtIndex: P2): R;
    collectionView_layout_minimumLineSpacingForSectionAtIndex<R = number, P0 = NSCollectionView, P1 = NSCollectionViewLayout, P2 = number>(_collectionView: P0, _layout: P1, _minimumLineSpacingForSectionAtIndex: P2): R;
    collectionView_layout_insetForSectionAtIndex<R = NSEdgeInsets, P0 = NSCollectionView, P1 = NSCollectionViewLayout, P2 = number>(_collectionView: P0, _layout: P1, _insetForSectionAtIndex: P2): R;
    collectionView_layout_sizeForItemAtIndexPath<R = CGSize, P0 = NSCollectionView, P1 = NSCollectionViewLayout, P2 = NSIndexPath>(_collectionView: P0, _layout: P1, _sizeForItemAtIndexPath: P2): R;
  }
  namespace NSCollectionViewDelegateFlowLayoutProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewDelegateProtocol {}
  }
}
