/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingPredominantAxisFilter<T0 = void, T1 = void, T2 = void> extends NSObject {
    resetIfOutOfDate<R = boolean, P0 = number>(_resetIfOutOfDate: P0): R;
    reset<R = void>(): R;
    filterInputScrollEvent_outputDelta_velocity<R = void, P0 = unknown, P1 = CGPoint, P2 = CGPoint>(_filterInputScrollEvent: P0, _outputDelta: P1, _velocity: P2): R;
    filterInputDelta_timestamp_outputDelta_velocity<R = void, P0 = CGPoint, P1 = number, P2 = CGPoint, P3 = CGPoint>(_filterInputDelta: P0, _timestamp: P1, _outputDelta: P2, _velocity: P3): R;
    dealloc<R = void>(): R;
    predominantAxisMode<R = number>(): R;
    setPredominantAxisMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSScrollingPredominantAxisFilter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSScrollingPredominantAxisFilter>(): R;
      new: <R = _NSScrollingPredominantAxisFilter>() => R;
      initialize<R = void>(): R;
    }
  }
}
