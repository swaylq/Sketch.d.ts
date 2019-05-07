/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeviceWhiteColor<T0 = void, T1 = void, T2 = void> extends NSCalibratedWhiteColor {}
  namespace NSDeviceWhiteColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCalibratedWhiteColor {
      alloc<R = NSDeviceWhiteColor>(): R;
      new: <R = NSDeviceWhiteColor>() => R;
    }
  }
}

declare const NSDeviceWhiteColor: cocoa.NSDeviceWhiteColor.CLASS;
