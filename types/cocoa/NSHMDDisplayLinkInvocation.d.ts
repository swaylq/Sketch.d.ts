/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDDisplayLinkInvocation<T0 = void, T1 = void, T2 = void> extends NSObject {
    duration<R = number>(): R;
    timestamp<R = number>(): R;
  }
  namespace NSHMDDisplayLinkInvocation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSHMDDisplayLinkInvocation>(): R;
      new: <R = NSHMDDisplayLinkInvocation>() => R;
    }
  }
}

declare const NSHMDDisplayLinkInvocation: cocoa.NSHMDDisplayLinkInvocation.CLASS;
