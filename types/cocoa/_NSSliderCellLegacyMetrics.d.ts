/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderCellLegacyMetrics<T0 = void, T1 = void, T2 = void> extends NSObject, NSSliderCellMetricsStrategyProtocol {
    _oldGetBarBounds<R = CGRect, P0 = CGRect>(__oldGetBarBounds: P0): R;
    _orthogonalTickMarkInset<R = number>(): R;
    _primaryTickMarkInset<R = number>(): R;
    _postBarLength<R = number>(): R;
    _preBarLength<R = number>(): R;
    _knobPointOverhang<R = number>(): R;
    _knobTailOverhang<R = number>(): R;
    state<R = unknown>(): R;
    setState<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSSliderCellLegacyMetrics {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSliderCellMetricsStrategyProtocol {
      alloc<R = _NSSliderCellLegacyMetrics>(): R;
      new: <R = _NSSliderCellLegacyMetrics>() => R;
      requiresLegacyMetricsForSlider<R = boolean, P0 = unknown>(_requiresLegacyMetricsForSlider: P0): R;
    }
  }
}
