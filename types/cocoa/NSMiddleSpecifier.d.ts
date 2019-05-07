/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMiddleSpecifier<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {}
  namespace NSMiddleSpecifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScriptObjectSpecifier {
      alloc<R = NSMiddleSpecifier>(): R;
      new: <R = NSMiddleSpecifier>() => R;
      _middleIndexForCount<R = number, P0 = number>(__middleIndexForCount: P0): R;
    }
  }
}

declare const NSMiddleSpecifier: cocoa.NSMiddleSpecifier.CLASS;
