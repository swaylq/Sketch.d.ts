/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMagnifierWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    accessibilityIsChildOfApp<R = boolean>(): R;
  }
  namespace _NSMagnifierWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = _NSMagnifierWindow>(): R;
      new: <R = _NSMagnifierWindow>() => R;
    }
  }
}
