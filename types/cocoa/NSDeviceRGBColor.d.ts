/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeviceRGBColor<T0 = void, T1 = void, T2 = void> extends NSCalibratedRGBColor {}
  namespace NSDeviceRGBColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCalibratedRGBColor {
      alloc<R = NSDeviceRGBColor>(): R;
      new: <R = NSDeviceRGBColor>() => R;
    }
  }
}

declare const NSDeviceRGBColor: cocoa.NSDeviceRGBColor.CLASS;
