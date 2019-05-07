/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHTTPCookie<T0 = void, T1 = void, T2 = void> {
    // + NSHTTPCookie(NSHTTPCookiePortCoding): 
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
  }
  namespace NSHTTPCookie {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const NSHTTPCookie: cocoa.NSHTTPCookie.CLASS;
