/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingMomentumCatesCalculator<T0 = void, T1 = void, T2 = void> extends _NSScrollingMomentumCalculatorBase {
    durationUntilStop<R = number>(): R;
  }
  namespace _NSScrollingMomentumCatesCalculator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSScrollingMomentumCalculatorBase {
      alloc<R = _NSScrollingMomentumCatesCalculator>(): R;
      new: <R = _NSScrollingMomentumCatesCalculator>() => R;
    }
  }
}
