/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMiddleSpecifier<T = any> extends NSScriptObjectSpecifier {}
  namespace classes {
    export interface NSMiddleSpecifier<T = any> extends NSScriptObjectSpecifier {
      alloc<R = NSMiddleSpecifier>(): R;
      new: <R = NSMiddleSpecifier>() => R;
      _middleIndexForCount<R = number, P0 = number>(__middleIndexForCount: P0): R;
    }
  }
}

declare const NSMiddleSpecifier: cocoa.classes.NSMiddleSpecifier;