/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConnectionHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    setWhitelist<R = void, P0 = unknown>(_setWhitelist: P0): R;
    dealloc<R = void>(): R;
  }
  namespace NSConnectionHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSConnectionHelper>(): R;
      new: <R = NSConnectionHelper>() => R;
    }
  }
}

declare const NSConnectionHelper: cocoa.NSConnectionHelper.CLASS;
