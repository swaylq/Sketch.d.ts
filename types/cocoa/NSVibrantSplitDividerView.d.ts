/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVibrantSplitDividerView<T0 = void, T1 = void, T2 = void> extends NSSplitDividerView {
    _preferredAppearance<R = unknown>(): R;
    setThickness<R = void, P0 = unknown>(_setThickness: P0): R;
    setOrientation<R = void, P0 = number>(_setOrientation: P0): R;
    setStyle<R = void, P0 = number>(_setStyle: P0): R;
    blendingMode<R = number>(): R;
    setBlendingMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSVibrantSplitDividerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSplitDividerView {
      alloc<R = NSVibrantSplitDividerView>(): R;
      new: <R = NSVibrantSplitDividerView>() => R;
    }
  }
}

declare const NSVibrantSplitDividerView: cocoa.NSVibrantSplitDividerView.CLASS;
