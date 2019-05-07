/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberFlowLayout<T0 = void, T1 = void, T2 = void> extends NSScrubberLayout {
    invalidateLayoutForItemsAtIndexes<R = void, P0 = unknown>(_invalidateLayoutForItemsAtIndexes: P0): R;
    invalidateLayout<R = void>(): R;
    layoutAttributesForItemsInRect<R = unknown, P0 = CGRect>(_layoutAttributesForItemsInRect: P0): R;
    layoutAttributesForItemAtIndex<R = unknown, P0 = number>(_layoutAttributesForItemAtIndex: P0): R;
    scrubberContentSize<R = CGSize>(): R;
    prepareLayout<R = void>(): R;
    dealloc<R = void>(): R;
    itemSize<R = CGSize>(): R;
    setItemSize<R = void, P0 = CGSize>(_v: P0): R;
    itemSpacing<R = number>(): R;
    setItemSpacing<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSScrubberFlowLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberLayout {
      alloc<R = NSScrubberFlowLayout>(): R;
      new: <R = NSScrubberFlowLayout>() => R;
    }
  }
}

declare const NSScrubberFlowLayout: cocoa.NSScrubberFlowLayout.CLASS;
