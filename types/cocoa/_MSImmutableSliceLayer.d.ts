/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSliceLayer<T0 = void, T1 = void, T2 = void> extends MSImmutableLayer {
    backgroundColor<R = MSImmutableColor>(): R;
    setBackgroundColor<R = void, P0 = MSImmutableColor>(_v: P0): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSImmutableSliceLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableLayer {
      alloc<R = _MSImmutableSliceLayer>(): R;
      new: <R = _MSImmutableSliceLayer>() => R;
    }
  }
}
