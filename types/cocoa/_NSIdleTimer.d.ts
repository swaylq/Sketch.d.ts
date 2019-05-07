/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIdleTimer<T0 = void, T1 = void, T2 = void> extends NSObject {
    resume<R = void>(): R;
    suspend<R = void>(): R;
    idle<R = void>(): R;
    dealloc<R = void>(): R;
    handler<R = CDUnknownBlockType>(): R;
    setHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace _NSIdleTimer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSIdleTimer>(): R;
      new: <R = _NSIdleTimer>() => R;
      removeIdleTimer<R = void, P0 = unknown>(_removeIdleTimer: P0): R;
      addIdleTimer<R = void, P0 = unknown>(_addIdleTimer: P0): R;
    }
  }
}
