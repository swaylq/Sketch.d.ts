/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPlaceholderString<T0 = void, T1 = void, T2 = void> extends NSString {
    length<R = number>(): R;
    initWithBytes_length_encoding<R = unknown, P0 = void, P1 = number, P2 = number>(_initWithBytes: P0, _length: P1, _encoding: P2): R;
    dealloc<R = void>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
  }
  namespace NSPlaceholderString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = NSPlaceholderString>(): R;
      new: <R = NSPlaceholderString>() => R;
    }
  }
}

declare const NSPlaceholderString: cocoa.NSPlaceholderString.CLASS;
