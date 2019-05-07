/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPickerScrubberLayout<T0 = void, T1 = void, T2 = void> extends NSScrubberLayout {
    shouldInvalidateLayoutForHighlightChange<R = boolean>(): R;
    shouldInvalidateLayoutForSelectionChange<R = boolean>(): R;
    layoutAttributesForItemsInRect<R = unknown, P0 = CGRect>(_layoutAttributesForItemsInRect: P0): R;
    layoutAttributesForItemAtIndex<R = unknown, P0 = number>(_layoutAttributesForItemAtIndex: P0): R;
    scrubberContentSize<R = CGSize>(): R;
    highlightedItemHeight<R = number>(): R;
    setHighlightedItemHeight<R = void, P0 = number>(_v: P0): R;
    selectedItemHeight<R = number>(): R;
    setSelectedItemHeight<R = void, P0 = number>(_v: P0): R;
    itemHeight<R = number>(): R;
    setItemHeight<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTouchBarColorListPickerScrubberLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberLayout {
      alloc<R = NSTouchBarColorListPickerScrubberLayout>(): R;
      new: <R = NSTouchBarColorListPickerScrubberLayout>() => R;
    }
  }
}

declare const NSTouchBarColorListPickerScrubberLayout: cocoa.NSTouchBarColorListPickerScrubberLayout.CLASS;
