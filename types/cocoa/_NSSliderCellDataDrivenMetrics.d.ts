/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderCellDataDrivenMetrics<T0 = void, T1 = void, T2 = void> extends NSObject, NSSliderCellMetricsStrategyProtocol {
    state<R = unknown>(): R;
    setState<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSSliderCellDataDrivenMetrics {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSliderCellMetricsStrategyProtocol {
      alloc<R = _NSSliderCellDataDrivenMetrics>(): R;
      new: <R = _NSSliderCellDataDrivenMetrics>() => R;
    }
  }
}
