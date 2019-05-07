/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullyBakedAXMutableAttributedString<T0 = void, T1 = void, T2 = void> extends NSMutableAttributedString {
    string<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    initWithAttributedString<R = unknown, P0 = unknown>(_initWithAttributedString: P0): R;
  }
  namespace _NSFullyBakedAXMutableAttributedString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableAttributedString {
      alloc<R = _NSFullyBakedAXMutableAttributedString>(): R;
      new: <R = _NSFullyBakedAXMutableAttributedString>() => R;
    }
  }
}
