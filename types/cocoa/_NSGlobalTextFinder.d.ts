/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGlobalTextFinder<T0 = void, T1 = void, T2 = void> extends _NSTextFinderImpl {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace _NSGlobalTextFinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSTextFinderImpl {
      alloc<R = _NSGlobalTextFinder>(): R;
      new: <R = _NSGlobalTextFinder>() => R;
    }
  }
}
