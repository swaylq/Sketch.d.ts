/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSShadowSurface<T0 = void, T1 = void, T2 = void> extends NSSurface {
    initWithView_height_fill<R = unknown, P0 = unknown, P1 = number, P2 = string>(_initWithView: P0, _height: P1, _fill: P2): R;
    initWithView_height_fill_isHorizontal<R = unknown, P0 = unknown, P1 = number, P2 = string, P3 = boolean>(_initWithView: P0, _height: P1, _fill: P2, _isHorizontal: P3): R;
  }
  namespace NSShadowSurface {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSurface {
      alloc<R = NSShadowSurface>(): R;
      new: <R = NSShadowSurface>() => R;
    }
  }
}

declare const NSShadowSurface: cocoa.NSShadowSurface.CLASS;
