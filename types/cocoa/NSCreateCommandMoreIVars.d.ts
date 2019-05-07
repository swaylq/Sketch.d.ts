/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCreateCommandMoreIVars<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSCreateCommandMoreIVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCreateCommandMoreIVars>(): R;
      new: <R = NSCreateCommandMoreIVars>() => R;
    }
  }
}

declare const NSCreateCommandMoreIVars: cocoa.NSCreateCommandMoreIVars.CLASS;
