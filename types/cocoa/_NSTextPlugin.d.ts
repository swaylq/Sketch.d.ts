/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextPlugin<T0 = void, T1 = void, T2 = void> extends _NSTextFieldPlugin {}
  namespace _NSTextPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSTextFieldPlugin {
      alloc<R = _NSTextPlugin>(): R;
      new: <R = _NSTextPlugin>() => R;
    }
  }
}
