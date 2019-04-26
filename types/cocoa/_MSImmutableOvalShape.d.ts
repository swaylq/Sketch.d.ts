/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableOvalShape<T0 = void, T1 = void, T2 = void> extends MSImmutableShapePathLayer {}
  namespace _MSImmutableOvalShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableShapePathLayer {
      alloc<R = _MSImmutableOvalShape>(): R;
      new: <R = _MSImmutableOvalShape>() => R;
    }
  }
}
