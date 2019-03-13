/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSGlobalTextFinder<T = any> extends _NSTextFinderImpl {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSGlobalTextFinder<T = any> extends _NSTextFinderImpl {
      alloc<R = _NSGlobalTextFinder>(): R;
      new: <R = _NSGlobalTextFinder>() => R;
    }
  }
}