/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSForceClickMonitor<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSForceClickMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSForceClickMonitor>(): R;
      new: <R = NSForceClickMonitor>() => R;
      forceClickUserPreferencesEnabled<R = boolean>(): R;
    }
  }
}

declare const NSForceClickMonitor: cocoa.NSForceClickMonitor.CLASS;
