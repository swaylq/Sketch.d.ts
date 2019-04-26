/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedWhiteColor<T0 = void, T1 = void, T2 = void> extends NSCalibratedWhiteColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace NSCachedWhiteColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCalibratedWhiteColor {
      alloc<R = NSCachedWhiteColor>(): R;
      new: <R = NSCachedWhiteColor>() => R;
    }
  }
}

declare const NSCachedWhiteColor: cocoa.NSCachedWhiteColor.CLASS;
