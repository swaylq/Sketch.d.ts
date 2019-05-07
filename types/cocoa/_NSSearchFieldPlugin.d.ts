/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSearchFieldPlugin<T0 = void, T1 = void, T2 = void> extends _NSTextFieldPlugin {}
  namespace _NSSearchFieldPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSTextFieldPlugin {
      alloc<R = _NSSearchFieldPlugin>(): R;
      new: <R = _NSSearchFieldPlugin>() => R;
    }
  }
}
