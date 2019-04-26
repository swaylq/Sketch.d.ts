/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCBoost<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    _initWithEvent<R = unknown, P0 = unknown>(__initWithEvent: P0): R;
  }
  namespace _NSXPCBoost {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSXPCBoost>(): R;
      new: <R = _NSXPCBoost>() => R;
    }
  }
}
