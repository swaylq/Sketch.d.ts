/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarSeparator<T0 = void, T1 = void, T2 = void> extends NSView {
    rasterize<R = CGPoint, P0 = CGPoint>(_rasterize: P0): R;
    setInPalette<R = void, P0 = boolean>(_setInPalette: P0): R;
  }
  namespace _NSToolbarSeparator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSToolbarSeparator>(): R;
      new: <R = _NSToolbarSeparator>() => R;
    }
  }
}
