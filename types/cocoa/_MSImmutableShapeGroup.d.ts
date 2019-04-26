/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableShapeGroup<T0 = void, T1 = void, T2 = void> extends MSImmutableLayerGroup {}
  namespace _MSImmutableShapeGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableLayerGroup {
      alloc<R = _MSImmutableShapeGroup>(): R;
      new: <R = _MSImmutableShapeGroup>() => R;
    }
  }
}
