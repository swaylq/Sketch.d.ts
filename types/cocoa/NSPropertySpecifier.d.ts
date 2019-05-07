/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPropertySpecifier<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {}
  namespace NSPropertySpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
      alloc<R = NSPropertySpecifier>(): R;
      new: <R = NSPropertySpecifier>() => R;
    }
  }
}

declare const NSPropertySpecifier: cocoa.NSPropertySpecifier.CLASS;
