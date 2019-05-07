/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUserAssetLibrary<T0 = void, T1 = void, T2 = void> extends MSAssetLibrary {
    startMonitoring<R = void>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    libraryType<R = number>(): R;
    fileMonitor<R = MSFileMonitor>(): R;
    setFileMonitor<R = void, P0 = MSFileMonitor>(_v: P0): R;
  }
  namespace MSUserAssetLibrary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAssetLibrary {
      alloc<R = MSUserAssetLibrary>(): R;
      new: <R = MSUserAssetLibrary>() => R;
    }
  }
}

declare const MSUserAssetLibrary: cocoa.MSUserAssetLibrary.CLASS;
