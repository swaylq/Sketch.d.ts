/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPlaceholderIndexSet<T0 = void, T1 = void, T2 = void> extends NSIndexSet {}
  namespace _NSPlaceholderIndexSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSIndexSet {
      alloc<R = _NSPlaceholderIndexSet>(): R;
      new: <R = _NSPlaceholderIndexSet>() => R;
    }
  }
}
