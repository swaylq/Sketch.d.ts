/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBuiltinCharacterSet<T0 = void, T1 = void, T2 = void> extends NSCharacterSet {}
  namespace NSBuiltinCharacterSet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCharacterSet {
      alloc<R = NSBuiltinCharacterSet>(): R;
      new: <R = NSBuiltinCharacterSet>() => R;
    }
  }
}

declare const NSBuiltinCharacterSet: cocoa.NSBuiltinCharacterSet.CLASS;
