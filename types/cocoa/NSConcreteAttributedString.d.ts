/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteAttributedString<T0 = void, T1 = void, T2 = void> extends NSAttributedString {
    _runArrayHoldingAttributes<R = unknown>(): R;
    string<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithAttributedString<R = unknown, P0 = unknown>(_initWithAttributedString: P0): R;
    initWithString_attributes<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _attributes: P1): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
  }
  namespace NSConcreteAttributedString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAttributedString {
      alloc<R = NSConcreteAttributedString>(): R;
      new: <R = NSConcreteAttributedString>() => R;
    }
  }
}

declare const NSConcreteAttributedString: cocoa.NSConcreteAttributedString.CLASS;
