/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserActivity<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSUserActivity {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUserActivity>(): R;
      new: <R = NSUserActivity>() => R;
      _supportsUserActivityAppLinks<R = boolean>(): R;
    }
  }
}

declare const NSUserActivity: cocoa.NSUserActivity.CLASS;
