/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewSectionLayout<T0 = void, T1 = void, T2 = void> extends NSObject {
    canInsertItem_atIndex<R = boolean, P0 = unknown, P1 = number>(_canInsertItem: P0, _atIndex: P1): R;
    overlappedIndexesForMovingItemAtIndex_toIndex_withFrame_primaryLocation<R = unknown, P0 = number, P1 = number, P2 = CGRect, P3 = CGPoint>(_overlappedIndexesForMovingItemAtIndex: P0, _toIndex: P1, _withFrame: P2, _primaryLocation: P3): R;
    canMoveItemAtIndex_toIndex_byRemovingItems<R = unknown, P0 = number, P1 = number, P2 = unknown>(_canMoveItemAtIndex: P0, _toIndex: P1, _byRemovingItems: P2): R;
    canMoveItemAtIndex_toIndex<R = boolean, P0 = number, P1 = number>(_canMoveItemAtIndex: P0, _toIndex: P1): R;
    invalidateLayout<R = void>(): R;
    prepareLayout<R = void>(): R;
    layoutAttributesForItemAtIndex<R = unknown, P0 = number>(_layoutAttributesForItemAtIndex: P0): R;
    layoutAttributesForItemsInRect<R = unknown, P0 = CGRect>(_layoutAttributesForItemsInRect: P0): R;
    dealloc<R = void>(): R;
    initWithDelegate_section<R = unknown, P0 = unknown, P1 = number>(_initWithDelegate: P0, _section: P1): R;
    accessibilityDescription<R = NSString>(): R;
    setAccessibilityDescription<R = void, P0 = NSString>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    cachedContainmentRect<R = CGRect>(): R;
    setCachedContainmentRect<R = void, P0 = CGRect>(_v: P0): R;
    cachedLayoutAttributes<R = NSArray>(): R;
    setCachedLayoutAttributes<R = void, P0 = NSArray>(_v: P0): R;
    section<R = number>(): R;
    delegate<R = NSTouchBarCustomizationPreviewSectionLayoutDelegate>(): R;
  }
  namespace NSTouchBarCustomizationPreviewSectionLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTouchBarCustomizationPreviewSectionLayout>(): R;
      new: <R = NSTouchBarCustomizationPreviewSectionLayout>() => R;
      layoutAttributesClass<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewSectionLayout: cocoa.NSTouchBarCustomizationPreviewSectionLayout.CLASS;
