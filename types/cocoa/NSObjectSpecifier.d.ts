/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObjectSpecifier<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {}
  namespace NSObjectSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
      alloc<R = NSObjectSpecifier>(): R;
      new: <R = NSObjectSpecifier>() => R;
    }
  }
}

declare const NSObjectSpecifier: cocoa.NSObjectSpecifier.CLASS;
