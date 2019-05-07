/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPlaceholderTextFieldPlugin<T0 = void, T1 = void, T2 = void> extends _NSTextFieldPlugin {}
  namespace _NSPlaceholderTextFieldPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSTextFieldPlugin {
      alloc<R = _NSPlaceholderTextFieldPlugin>(): R;
      new: <R = _NSPlaceholderTextFieldPlugin>() => R;
    }
  }
}
