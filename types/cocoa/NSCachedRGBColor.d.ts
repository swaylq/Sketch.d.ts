/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedRGBColor<T0 = void, T1 = void, T2 = void> extends NSCalibratedRGBColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace NSCachedRGBColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCalibratedRGBColor {
      alloc<R = NSCachedRGBColor>(): R;
      new: <R = NSCachedRGBColor>() => R;
    }
  }
}

declare const NSCachedRGBColor: cocoa.NSCachedRGBColor.CLASS;
