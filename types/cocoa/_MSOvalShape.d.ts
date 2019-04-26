/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSOvalShape<T0 = void, T1 = void, T2 = void> extends MSShapePathLayer {}
  namespace _MSOvalShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSShapePathLayer {
      alloc<R = _MSOvalShape>(): R;
      new: <R = _MSOvalShape>() => R;
    }
  }
}
