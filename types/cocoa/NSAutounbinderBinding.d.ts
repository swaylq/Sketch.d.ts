/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAutounbinderBinding<T0 = void, T1 = void, T2 = void> extends NSWeakAutounbinderBinding {}
  namespace NSAutounbinderBinding {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWeakAutounbinderBinding {
      alloc<R = NSAutounbinderBinding>(): R;
      new: <R = NSAutounbinderBinding>() => R;
    }
  }
}

declare const NSAutounbinderBinding: cocoa.NSAutounbinderBinding.CLASS;
