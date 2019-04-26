/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOverlayBackgroundView<T0 = void, T1 = void, T2 = void> extends NSView {
    paletteScaleFactor<R = number>(): R;
    setPaletteScaleFactor<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSOverlayBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSOverlayBackgroundView>(): R;
      new: <R = _NSOverlayBackgroundView>() => R;
    }
  }
}
