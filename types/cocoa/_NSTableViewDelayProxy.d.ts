/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTableViewDelayProxy<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSTableViewDelayProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTableViewDelayProxy>(): R;
      new: <R = _NSTableViewDelayProxy>() => R;
      proxy<R = unknown>(): R;
    }
  }
}
