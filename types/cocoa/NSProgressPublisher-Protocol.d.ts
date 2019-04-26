/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressPublisherProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    appWithBundleID_didAcknowledgeWithSuccess<R = void, P0 = NSString, P1 = boolean>(_appWithBundleID: P0, _didAcknowledgeWithSuccess: P1): R;
    prioritize<R = void>(): R;
    resume<R = void>(): R;
    pause<R = void>(): R;
    cancel<R = void>(): R;
  }
  namespace NSProgressPublisherProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
