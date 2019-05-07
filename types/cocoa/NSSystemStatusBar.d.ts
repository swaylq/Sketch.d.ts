/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSystemStatusBar<T0 = void, T1 = void, T2 = void> extends NSStatusBar {
    _updateReplicantKeys<R = void>(): R;
    thickness<R = number>(): R;
  }
  namespace NSSystemStatusBar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStatusBar {
      alloc<R = NSSystemStatusBar>(): R;
      new: <R = NSSystemStatusBar>() => R;
    }
  }
}

declare const NSSystemStatusBar: cocoa.NSSystemStatusBar.CLASS;
