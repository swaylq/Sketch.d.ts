/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedWhiteColor<T = any> extends cocoa.NSCalibratedWhiteColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace classes {
    export interface NSCachedWhiteColor<T = any> extends cocoa.classes.NSCalibratedWhiteColor {
      alloc<R = NSCachedWhiteColor>(): R;
      new: <R = NSCachedWhiteColor>() => R;
    }
  }
}

declare const NSCachedWhiteColor: cocoa.classes.NSCachedWhiteColor;
