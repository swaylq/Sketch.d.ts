/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedDeviceRGBColor<T0 = void, T1 = void, T2 = void> extends NSDeviceRGBColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace NSCachedDeviceRGBColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDeviceRGBColor {
      alloc<R = NSCachedDeviceRGBColor>(): R;
      new: <R = NSCachedDeviceRGBColor>() => R;
    }
  }
}

declare const NSCachedDeviceRGBColor: cocoa.NSCachedDeviceRGBColor.CLASS;
