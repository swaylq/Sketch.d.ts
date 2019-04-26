/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSliceLayer<T0 = void, T1 = void, T2 = void> extends MSLayer {
    backgroundColor<R = MSColor>(): R;
    setBackgroundColor<R = void, P0 = MSColor>(_v: P0): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSSliceLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayer {
      alloc<R = _MSSliceLayer>(): R;
      new: <R = _MSSliceLayer>() => R;
    }
  }
}
