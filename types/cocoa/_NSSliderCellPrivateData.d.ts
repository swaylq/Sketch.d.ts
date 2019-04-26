/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSliderCellPrivateData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    trackFillColor<R = NSColor>(): R;
    setTrackFillColor<R = void, P0 = NSColor>(_v: P0): R;
    tickMarkProminence<R = NSMutableDictionary>(): R;
    setTickMarkProminence<R = void, P0 = NSMutableDictionary>(_v: P0): R;
  }
  namespace _NSSliderCellPrivateData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSSliderCellPrivateData>(): R;
      new: <R = _NSSliderCellPrivateData>() => R;
    }
  }
}
