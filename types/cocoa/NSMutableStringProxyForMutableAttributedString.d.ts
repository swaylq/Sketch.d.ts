/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableStringProxyForMutableAttributedString<T0 = void, T1 = void, T2 = void> extends NSMutableString {
    length<R = number>(): R;
    dealloc<R = void>(): R;
    initWithMutableAttributedString<R = unknown, P0 = unknown>(_initWithMutableAttributedString: P0): R;
  }
  namespace NSMutableStringProxyForMutableAttributedString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableString {
      alloc<R = NSMutableStringProxyForMutableAttributedString>(): R;
      new: <R = NSMutableStringProxyForMutableAttributedString>() => R;
    }
  }
}

declare const NSMutableStringProxyForMutableAttributedString: cocoa.NSMutableStringProxyForMutableAttributedString.CLASS;
