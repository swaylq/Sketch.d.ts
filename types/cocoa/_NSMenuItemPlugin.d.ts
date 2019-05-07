/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMenuItemPlugin<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {}
  namespace _NSMenuItemPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {
      alloc<R = _NSMenuItemPlugin>(): R;
      new: <R = _NSMenuItemPlugin>() => R;
    }
  }
}
