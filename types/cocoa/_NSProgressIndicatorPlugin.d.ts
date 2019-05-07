/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProgressIndicatorPlugin<T0 = void, T1 = void, T2 = void> extends _NSDoubleValueBinderPlugin {}
  namespace _NSProgressIndicatorPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSDoubleValueBinderPlugin {
      alloc<R = _NSProgressIndicatorPlugin>(): R;
      new: <R = _NSProgressIndicatorPlugin>() => R;
    }
  }
}
