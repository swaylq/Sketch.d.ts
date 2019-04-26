/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCheckBoxPlugin<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {}
  namespace _NSCheckBoxPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {
      alloc<R = _NSCheckBoxPlugin>(): R;
      new: <R = _NSCheckBoxPlugin>() => R;
    }
  }
}
