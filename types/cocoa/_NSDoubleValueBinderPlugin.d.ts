/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDoubleValueBinderPlugin<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {}
  namespace _NSDoubleValueBinderPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {
      alloc<R = _NSDoubleValueBinderPlugin>(): R;
      new: <R = _NSDoubleValueBinderPlugin>() => R;
    }
  }
}
