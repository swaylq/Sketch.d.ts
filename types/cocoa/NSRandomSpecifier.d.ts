/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRandomSpecifier<T = any> extends NSScriptObjectSpecifier {}
  namespace classes {
    export interface NSRandomSpecifier<T = any> extends NSScriptObjectSpecifier {
      alloc<R = NSRandomSpecifier>(): R;
      new: <R = NSRandomSpecifier>() => R;
      _randomIndexForCount<R = number, P0 = number>(__randomIndexForCount: P0): R;
    }
  }
}

declare const NSRandomSpecifier: cocoa.classes.NSRandomSpecifier;