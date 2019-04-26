/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRateLimiter<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    update<R = void>(): R;
    updateIfNeeded<R = void>(): R;
    initWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_initWithTarget: P0, _action: P1): R;
    hasScheduledBlock<R = boolean>(): R;
    setHasScheduledBlock<R = void, P0 = boolean>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    needsUpdate<R = boolean>(): R;
    setNeedsUpdate<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSRateLimiter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSRateLimiter>(): R;
      new: <R = MSRateLimiter>() => R;
    }
  }
}

declare const MSRateLimiter: cocoa.MSRateLimiter.CLASS;
