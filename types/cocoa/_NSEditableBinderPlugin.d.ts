/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSEditableBinderPlugin<T0 = void, T1 = void, T2 = void> extends _NSBinderPlugin {}
  namespace _NSEditableBinderPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBinderPlugin {
      alloc<R = _NSEditableBinderPlugin>(): R;
      new: <R = _NSEditableBinderPlugin>() => R;
    }
  }
}
