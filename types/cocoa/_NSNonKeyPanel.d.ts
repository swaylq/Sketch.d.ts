/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSNonKeyPanel<T0 = void, T1 = void, T2 = void> extends NSPanel {
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
  }
  namespace _NSNonKeyPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = _NSNonKeyPanel>(): R;
      new: <R = _NSNonKeyPanel>() => R;
    }
  }
}
