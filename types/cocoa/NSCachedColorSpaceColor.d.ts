/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedColorSpaceColor<T0 = void, T1 = void, T2 = void> extends NSColorSpaceColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
  }
  namespace NSCachedColorSpaceColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorSpaceColor {
      alloc<R = NSCachedColorSpaceColor>(): R;
      new: <R = NSCachedColorSpaceColor>() => R;
    }
  }
}

declare const NSCachedColorSpaceColor: cocoa.NSCachedColorSpaceColor.CLASS;
