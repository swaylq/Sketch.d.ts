/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFinderAttributedStringProxy<T0 = void, T1 = void, T2 = void> extends NSAttributedString {
    doubleClickAtIndex<R = _NSRange, P0 = number>(_doubleClickAtIndex: P0): R;
    string<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
  }
  namespace _NSTextFinderAttributedStringProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAttributedString {
      alloc<R = _NSTextFinderAttributedStringProxy>(): R;
      new: <R = _NSTextFinderAttributedStringProxy>() => R;
    }
  }
}
