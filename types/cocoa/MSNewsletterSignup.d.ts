/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNewsletterSignup<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSNewsletterSignup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSNewsletterSignup>(): R;
      new: <R = MSNewsletterSignup>() => R;
      registerEmail<R = void, P0 = unknown>(_registerEmail: P0): R;
    }
  }
}

declare const MSNewsletterSignup: cocoa.MSNewsletterSignup.CLASS;
