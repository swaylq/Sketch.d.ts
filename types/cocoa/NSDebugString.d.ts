/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugString<T = any> extends cocoa.NSString {
    dealloc<R = void>(): R;
    length<R = number>(): R;
  }
  namespace classes {
    export interface NSDebugString<T = any> extends cocoa.classes.NSString {
      alloc<R = NSDebugString>(): R;
      new: <R = NSDebugString>() => R;
    }
  }
}

declare const NSDebugString: cocoa.classes.NSDebugString;
