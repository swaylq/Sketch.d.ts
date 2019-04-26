/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionLayout<T0 = void, T1 = void, T2 = void> extends NSCollectionViewFlowLayout {
    cxx_destruct<R = void>(): R;
    recalculateLayoutParameters<R = void>(): R;
    layoutAttributesForSupplementaryViewOfKind_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(_layoutAttributesForSupplementaryViewOfKind: P0, _atIndexPath: P1): R;
    layoutAttributesForElementsInRect<R = unknown, P0 = CGRect>(_layoutAttributesForElementsInRect: P0): R;
    layoutAttributesForDropTargetAtPoint<R = unknown, P0 = CGPoint>(_layoutAttributesForDropTargetAtPoint: P0): R;
    itemSizeMode<R = number>(): R;
    setItemSizeMode<R = void, P0 = number>(_v: P0): R;
    displayMode<R = number>(): R;
    setDisplayMode<R = void, P0 = number>(_v: P0): R;
    updatedIndexes<R = NSIndexSet>(): R;
    setUpdatedIndexes<R = void, P0 = NSIndexSet>(_v: P0): R;
  }
  namespace MSAssetCollectionLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewFlowLayout {
      sectionInsetsForItemSizeMode_displayMode<R = NSEdgeInsets, P0 = number, P1 = number>(_sectionInsetsForItemSizeMode: P0, _displayMode: P1): R;
      lineSpacingForItemSizeMode_displayMode<R = number, P0 = number, P1 = number>(_lineSpacingForItemSizeMode: P0, _displayMode: P1): R;
      interItemSpacingForItemSizeMode<R = number, P0 = number>(_interItemSpacingForItemSizeMode: P0): R;
      itemSizeForItemSizeMode_displayMode_collectionViewWidth_sectionInsets<R = CGSize, P0 = number, P1 = number, P2 = number, P3 = NSEdgeInsets>(_itemSizeForItemSizeMode: P0, _displayMode: P1, _collectionViewWidth: P2, _sectionInsets: P3): R;
      layoutAttributesClass<R = unknown>(): R;
    }
  }
}

declare const MSAssetCollectionLayout: cocoa.MSAssetCollectionLayout.CLASS;
