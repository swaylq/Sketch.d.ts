/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace _NSToolbarButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = _NSToolbarButtonCell>(): R;
      new: <R = _NSToolbarButtonCell>() => R;
    }
  }
}
