/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorScaleSlider<T0 = void, T1 = void, T2 = void> extends NSSlider {
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    setDrawsTrackAsColorScaleType<R = void, P0 = number>(_setDrawsTrackAsColorScaleType: P0): R;
    flippedHorizontally<R = boolean>(): R;
    setFlippedHorizontally<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSColorScaleSlider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSlider {
      alloc<R = NSColorScaleSlider>(): R;
      new: <R = NSColorScaleSlider>() => R;
    }
  }
}

declare const NSColorScaleSlider: cocoa.NSColorScaleSlider.CLASS;
