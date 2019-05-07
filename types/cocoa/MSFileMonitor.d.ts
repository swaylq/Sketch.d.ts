/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFileMonitor<T0 = void, T1 = void, T2 = void> extends MSFolderMonitor {}
  namespace MSFileMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFolderMonitor {
      alloc<R = MSFileMonitor>(): R;
      new: <R = MSFileMonitor>() => R;
    }
  }
}

declare const MSFileMonitor: cocoa.MSFileMonitor.CLASS;
