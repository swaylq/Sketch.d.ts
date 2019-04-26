/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorSwatchScrubberItemView<T0 = void, T1 = void, T2 = void> extends NSScrubberItemView {
    forceOutline<R = boolean>(): R;
    setForceOutline<R = void, P0 = boolean>(_v: P0): R;
    isRightmostItem<R = boolean>(): R;
    setIsRightmostItem<R = void, P0 = boolean>(_v: P0): R;
    isLeftmostItem<R = boolean>(): R;
    setIsLeftmostItem<R = void, P0 = boolean>(_v: P0): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSColorSwatchScrubberItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrubberItemView {
      alloc<R = NSColorSwatchScrubberItemView>(): R;
      new: <R = NSColorSwatchScrubberItemView>() => R;
    }
  }
}

declare const NSColorSwatchScrubberItemView: cocoa.NSColorSwatchScrubberItemView.CLASS;
