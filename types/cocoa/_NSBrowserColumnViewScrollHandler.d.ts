/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserColumnViewScrollHandler<T0 = void, T1 = void, T2 = void> extends NSObject {
    shouldSendEvent_toSuperview_toSuperclass<R = void, P0 = unknown, P1 = string, P2 = string>(_shouldSendEvent: P0, _toSuperview: P1, _toSuperclass: P2): R;
  }
  namespace _NSBrowserColumnViewScrollHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSBrowserColumnViewScrollHandler>(): R;
      new: <R = _NSBrowserColumnViewScrollHandler>() => R;
    }
  }
}
