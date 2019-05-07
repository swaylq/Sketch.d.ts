/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRandomSpecifier<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {}
  namespace NSRandomSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
      alloc<R = NSRandomSpecifier>(): R;
      new: <R = NSRandomSpecifier>() => R;
      _randomIndexForCount<R = number, P0 = number>(__randomIndexForCount: P0): R;
    }
  }
}

declare const NSRandomSpecifier: cocoa.NSRandomSpecifier.CLASS;
