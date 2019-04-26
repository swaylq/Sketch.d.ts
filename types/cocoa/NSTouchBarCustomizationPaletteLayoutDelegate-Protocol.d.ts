/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLayoutDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSCollectionViewDelegateProtocol {
    collectionView_layout_maxSizeForItemAtIndexPath<R = CGSize, P0 = NSCollectionView, P1 = NSCollectionViewLayout, P2 = NSIndexPath>(_collectionView: P0, _layout: P1, _maxSizeForItemAtIndexPath: P2): R;
    collectionView_layout_minSizeForItemAtIndexPath<R = CGSize, P0 = NSCollectionView, P1 = NSCollectionViewLayout, P2 = NSIndexPath>(_collectionView: P0, _layout: P1, _minSizeForItemAtIndexPath: P2): R;
  }
  namespace NSTouchBarCustomizationPaletteLayoutDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewDelegateProtocol {}
  }
}
