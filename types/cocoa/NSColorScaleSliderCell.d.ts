/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorScaleSliderCell<T0 = void, T1 = void, T2 = void> extends NSSliderCell {
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    setDrawsTrackAsColorScaleType<R = void, P0 = number>(_setDrawsTrackAsColorScaleType: P0): R;
    _computeColorScaleIfNecessaryWithSize<R = void, P0 = CGSize>(__computeColorScaleIfNecessaryWithSize: P0): R;
    flippedHorizontally<R = boolean>(): R;
    setFlippedHorizontally<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSColorScaleSliderCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSliderCell {
      alloc<R = NSColorScaleSliderCell>(): R;
      new: <R = NSColorScaleSliderCell>() => R;
    }
  }
}

declare const NSColorScaleSliderCell: cocoa.NSColorScaleSliderCell.CLASS;
