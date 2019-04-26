/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugString<T0 = void, T1 = void, T2 = void> extends NSString {
    dealloc<R = void>(): R;
    length<R = number>(): R;
  }
  namespace NSDebugString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSString {
      alloc<R = NSDebugString>(): R;
      new: <R = NSDebugString>() => R;
    }
  }
}

declare const NSDebugString: cocoa.NSDebugString.CLASS;
