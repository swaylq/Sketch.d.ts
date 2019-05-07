/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFlippedImage<T0 = void, T1 = void, T2 = void> extends NSImage {
    initWithRect_color_ofView<R = unknown, P0 = CGRect, P1 = unknown, P2 = unknown>(_initWithRect: P0, _color: P1, _ofView: P2): R;
  }
  namespace _NSFlippedImage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImage {
      alloc<R = _NSFlippedImage>(): R;
      new: <R = _NSFlippedImage>() => R;
    }
  }
}
