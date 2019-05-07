/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarReducedMetricsAppearance<T0 = void, T1 = void, T2 = void> extends NSAppearance {}
  namespace NSTouchBarReducedMetricsAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAppearance {
      alloc<R = NSTouchBarReducedMetricsAppearance>(): R;
      new: <R = NSTouchBarReducedMetricsAppearance>() => R;
    }
  }
}

declare const NSTouchBarReducedMetricsAppearance: cocoa.NSTouchBarReducedMetricsAppearance.CLASS;
