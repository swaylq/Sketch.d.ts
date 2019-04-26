/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPositionalSpecifierMoreIVars<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSPositionalSpecifierMoreIVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPositionalSpecifierMoreIVars>(): R;
      new: <R = NSPositionalSpecifierMoreIVars>() => R;
    }
  }
}

declare const NSPositionalSpecifierMoreIVars: cocoa.NSPositionalSpecifierMoreIVars.CLASS;
