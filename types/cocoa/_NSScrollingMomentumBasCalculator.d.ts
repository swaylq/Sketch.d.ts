/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingMomentumBasCalculator<T0 = void, T1 = void, T2 = void> extends _NSScrollingMomentumCalculatorBase {
    _cacheResultsForDurationInMs<R = void, P0 = number>(__cacheResultsForDurationInMs: P0): R;
    durationUntilStop<R = number>(): R;
  }
  namespace _NSScrollingMomentumBasCalculator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSScrollingMomentumCalculatorBase {
      alloc<R = _NSScrollingMomentumBasCalculator>(): R;
      new: <R = _NSScrollingMomentumBasCalculator>() => R;
    }
  }
}
