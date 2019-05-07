/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayTiming<T0 = void, T1 = void, T2 = void> extends NSDisplayTiming {
    description<R = unknown>(): R;
    hash<R = number>(): R;
    initWithAnchorTime_interval_latency<R = unknown, P0 = number, P1 = number, P2 = number>(_initWithAnchorTime: P0, _interval: P1, _latency: P2): R;
  }
  namespace _NSDisplayTiming {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDisplayTiming {
      alloc<R = _NSDisplayTiming>(): R;
      new: <R = _NSDisplayTiming>() => R;
    }
  }
}
