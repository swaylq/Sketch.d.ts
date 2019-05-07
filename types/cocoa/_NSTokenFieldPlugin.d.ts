/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTokenFieldPlugin<T0 = void, T1 = void, T2 = void> extends _NSPlaceholderTextFieldPlugin {
    _setPlaceholderForValue_inObject<R = void, P0 = unknown, P1 = unknown>(__setPlaceholderForValue: P0, _inObject: P1): R;
  }
  namespace _NSTokenFieldPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPlaceholderTextFieldPlugin {
      alloc<R = _NSTokenFieldPlugin>(): R;
      new: <R = _NSTokenFieldPlugin>() => R;
    }
  }
}
