/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimpleCString<T0 = void, T1 = void, T2 = void> extends NSString {
    dealloc<R = void>(): R;
    hash<R = number>(): R;
    length<R = number>(): R;
    initWithCStringNoCopy_length<R = unknown, P0 = string, P1 = number>(_initWithCStringNoCopy: P0, _length: P1): R;
  }
  namespace NSSimpleCString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = NSSimpleCString>(): R;
      new: <R = NSSimpleCString>() => R;
    }
  }
}

declare const NSSimpleCString: cocoa.NSSimpleCString.CLASS;
