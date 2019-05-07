/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextPlaceholderInternalVars<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSTextPlaceholderInternalVars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTextPlaceholderInternalVars>(): R;
      new: <R = NSTextPlaceholderInternalVars>() => R;
    }
  }
}

declare const NSTextPlaceholderInternalVars: cocoa.NSTextPlaceholderInternalVars.CLASS;
