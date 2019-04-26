/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesMonitor<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSServicesMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSServicesMonitor>(): R;
      new: <R = NSServicesMonitor>() => R;
      monitorWithObserver<R = unknown, P0 = unknown>(_monitorWithObserver: P0): R;
    }
  }
}

declare const NSServicesMonitor: cocoa.NSServicesMonitor.CLASS;
