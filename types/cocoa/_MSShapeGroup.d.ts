/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSShapeGroup<T0 = void, T1 = void, T2 = void> extends MSLayerGroup {}
  namespace _MSShapeGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayerGroup {
      alloc<R = _MSShapeGroup>(): R;
      new: <R = _MSShapeGroup>() => R;
    }
  }
}
