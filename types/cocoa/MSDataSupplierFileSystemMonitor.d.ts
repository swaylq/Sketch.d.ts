/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplierFileSystemMonitor<T0 = void, T1 = void, T2 = void> extends MSFolderMonitor {}
  namespace MSDataSupplierFileSystemMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSFolderMonitor {
      alloc<R = MSDataSupplierFileSystemMonitor>(): R;
      new: <R = MSDataSupplierFileSystemMonitor>() => R;
    }
  }
}

declare const MSDataSupplierFileSystemMonitor: cocoa.MSDataSupplierFileSystemMonitor.CLASS;
