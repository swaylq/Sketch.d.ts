/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewLayout<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayout {
    overlappedIndexPathsForMovingItemAtIndexPath_toIndexPath_withFrame_primaryLocation<R = unknown, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = CGPoint>(_overlappedIndexPathsForMovingItemAtIndexPath: P0, _toIndexPath: P1, _withFrame: P2, _primaryLocation: P3): R;
    canMoveItemAtIndexPath_toIndexPath_byRemovingItems<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_canMoveItemAtIndexPath: P0, _toIndexPath: P1, _byRemovingItems: P2): R;
    canInsertItem_atIndexPath<R = boolean, P0 = unknown, P1 = unknown>(_canInsertItem: P0, _atIndexPath: P1): R;
    canMoveItemAtIndexPath_toIndexPath<R = boolean, P0 = unknown, P1 = unknown>(_canMoveItemAtIndexPath: P0, _toIndexPath: P1): R;
    finalLayoutAttributesForDisappearingSupplementaryElementOfKind_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(_finalLayoutAttributesForDisappearingSupplementaryElementOfKind: P0, _atIndexPath: P1): R;
    initialLayoutAttributesForAppearingSupplementaryElementOfKind_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(_initialLayoutAttributesForAppearingSupplementaryElementOfKind: P0, _atIndexPath: P1): R;
    layoutAttributesForSupplementaryViewOfKind_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(_layoutAttributesForSupplementaryViewOfKind: P0, _atIndexPath: P1): R;
    _workaround_layoutAttributesForSupplementaryViewOfKind_atIndexPath_canReturnNil<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(__workaround_layoutAttributesForSupplementaryViewOfKind: P0, _atIndexPath: P1, _canReturnNil: P2): R;
    finalLayoutAttributesForDisappearingItemAtIndexPath<R = unknown, P0 = unknown>(_finalLayoutAttributesForDisappearingItemAtIndexPath: P0): R;
    initialLayoutAttributesForAppearingItemAtIndexPath<R = unknown, P0 = unknown>(_initialLayoutAttributesForAppearingItemAtIndexPath: P0): R;
    layoutAttributesForItemAtIndexPath<R = unknown, P0 = unknown>(_layoutAttributesForItemAtIndexPath: P0): R;
    layoutAttributesForElementsInRect<R = unknown, P0 = CGRect>(_layoutAttributesForElementsInRect: P0): R;
    prepareLayout<R = void>(): R;
    delegate<R = unknown>(): R;
    shouldInvalidateLayoutForBoundsChange<R = boolean, P0 = CGRect>(_shouldInvalidateLayoutForBoundsChange: P0): R;
    collectionViewContentSize<R = CGSize>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSTouchBarCustomizationPreviewLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewLayout {
      layoutAttributesClass<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewLayout: cocoa.NSTouchBarCustomizationPreviewLayout.CLASS;
