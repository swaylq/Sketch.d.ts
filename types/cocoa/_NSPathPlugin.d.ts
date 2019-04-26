/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPathPlugin<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {}
  namespace _NSPathPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {
      alloc<R = _NSPathPlugin>(): R;
      new: <R = _NSPathPlugin>() => R;
    }
  }
}
