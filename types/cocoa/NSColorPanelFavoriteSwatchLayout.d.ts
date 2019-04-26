/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPanelFavoriteSwatchLayout<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayout {
    layoutAttributesForInterItemGapBeforeIndexPath<R = unknown, P0 = unknown>(_layoutAttributesForInterItemGapBeforeIndexPath: P0): R;
    layoutAttributesForDropTargetAtPoint<R = unknown, P0 = CGPoint>(_layoutAttributesForDropTargetAtPoint: P0): R;
    collectionViewContentSize<R = CGSize>(): R;
    enclosingBounds<R = CGRect>(): R;
    shouldInvalidateLayoutForBoundsChange<R = boolean, P0 = CGRect>(_shouldInvalidateLayoutForBoundsChange: P0): R;
    layoutAttributesForItemAtIndexPath<R = unknown, P0 = unknown>(_layoutAttributesForItemAtIndexPath: P0): R;
    layoutAttributesForElementsInRect<R = unknown, P0 = CGRect>(_layoutAttributesForElementsInRect: P0): R;
    numberOfItemsFittingInBoundsWidth<R = number, P0 = number>(_numberOfItemsFittingInBoundsWidth: P0): R;
    layoutAttributesForDecorationViewOfKind_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(_layoutAttributesForDecorationViewOfKind: P0, _atIndexPath: P1): R;
    init<R = unknown>(): R;
    sectionInset<R = NSEdgeInsets>(): R;
    setSectionInset<R = void, P0 = NSEdgeInsets>(_v: P0): R;
    itemSpacing<R = number>(): R;
    setItemSpacing<R = void, P0 = number>(_v: P0): R;
    itemSize<R = CGSize>(): R;
    setItemSize<R = void, P0 = CGSize>(_v: P0): R;
  }
  namespace NSColorPanelFavoriteSwatchLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayout {}
  }
}

declare const NSColorPanelFavoriteSwatchLayout: cocoa.NSColorPanelFavoriteSwatchLayout.CLASS;
