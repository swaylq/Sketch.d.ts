/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSComboBoxPlugin<T0 = void, T1 = void, T2 = void> extends _NSSelectionBinderPlugin {}
  namespace _NSComboBoxPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSSelectionBinderPlugin {
      alloc<R = _NSComboBoxPlugin>(): R;
      new: <R = _NSComboBoxPlugin>() => R;
    }
  }
}
