/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberProportionalLayout<T0 = void, T1 = void, T2 = void> extends NSScrubberLayout {
    shouldInvalidateLayoutForChangeFromVisibleRect_toVisibleRect<R = boolean, P0 = CGRect, P1 = CGRect>(_shouldInvalidateLayoutForChangeFromVisibleRect: P0, _toVisibleRect: P1): R;
    layoutAttributesForItemsInRect<R = unknown, P0 = CGRect>(_layoutAttributesForItemsInRect: P0): R;
    layoutAttributesForItemAtIndex<R = unknown, P0 = number>(_layoutAttributesForItemAtIndex: P0): R;
    scrubberContentSize<R = CGSize>(): R;
    itemWidth<R = number>(): R;
    initWithNumberOfVisibleItems<R = unknown, P0 = number>(_initWithNumberOfVisibleItems: P0): R;
    numberOfVisibleItems<R = number>(): R;
    setNumberOfVisibleItems<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSScrubberProportionalLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberLayout {
      alloc<R = NSScrubberProportionalLayout>(): R;
      new: <R = NSScrubberProportionalLayout>() => R;
    }
  }
}

declare const NSScrubberProportionalLayout: cocoa.NSScrubberProportionalLayout.CLASS;
