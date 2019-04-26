/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedDeviceWhiteColor<T0 = void, T1 = void, T2 = void> extends NSDeviceWhiteColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace NSCachedDeviceWhiteColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDeviceWhiteColor {
      alloc<R = NSCachedDeviceWhiteColor>(): R;
      new: <R = NSCachedDeviceWhiteColor>() => R;
    }
  }
}

declare const NSCachedDeviceWhiteColor: cocoa.NSCachedDeviceWhiteColor.CLASS;
