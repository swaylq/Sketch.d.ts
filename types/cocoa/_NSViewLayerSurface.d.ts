/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewLayerSurface<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSViewLayerSurface {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSViewLayerSurface>(): R;
      new: <R = _NSViewLayerSurface>() => R;
      initialize<R = void>(): R;
    }
  }
}
