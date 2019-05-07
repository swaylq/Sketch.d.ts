/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayLinkInvocation<T0 = void, T1 = void, T2 = void> extends NSObject {
    duration<R = number>(): R;
    timestamp<R = number>(): R;
  }
  namespace NSDisplayLinkInvocation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDisplayLinkInvocation>(): R;
      new: <R = NSDisplayLinkInvocation>() => R;
    }
  }
}

declare const NSDisplayLinkInvocation: cocoa.NSDisplayLinkInvocation.CLASS;
