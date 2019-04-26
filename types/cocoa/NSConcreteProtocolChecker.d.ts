/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteProtocolChecker<T0 = void, T1 = void, T2 = void> extends NSProtocolChecker {
    target<R = unknown>(): R;
    protocol<R = unknown>(): R;
  }
  namespace NSConcreteProtocolChecker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSProtocolChecker {}
  }
}

declare const NSConcreteProtocolChecker: cocoa.NSConcreteProtocolChecker.CLASS;
