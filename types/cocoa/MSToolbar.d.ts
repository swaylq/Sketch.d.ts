/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolbar<T0 = void, T1 = void, T2 = void> extends NSToolbar {
    toolbarHeight_ms<R = number>(): R;
    _allowsSizeMode<R = boolean, P0 = number>(__allowsSizeMode: P0): R;
    setSizeMode<R = void, P0 = number>(_setSizeMode: P0): R;
  }
  namespace MSToolbar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbar {
      alloc<R = MSToolbar>(): R;
      new: <R = MSToolbar>() => R;
    }
  }
}

declare const MSToolbar: cocoa.MSToolbar.CLASS;
