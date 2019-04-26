/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCachedIndexSet<T0 = void, T1 = void, T2 = void> extends NSIndexSet {}
  namespace _NSCachedIndexSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSIndexSet {
      alloc<R = _NSCachedIndexSet>(): R;
      new: <R = _NSCachedIndexSet>() => R;
    }
  }
}
