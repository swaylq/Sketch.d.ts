/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextViewIvars<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSTextViewIvars {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTextViewIvars>(): R;
      new: <R = NSTextViewIvars>() => R;
    }
  }
}

declare const NSTextViewIvars: cocoa.NSTextViewIvars.CLASS;
