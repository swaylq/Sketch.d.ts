/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragSegmentGestureRecognizer<T0 = void, T1 = void, T2 = void> extends MSDragGestureRecognizer {
    offset<R = number>(): R;
    setOffset<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSDragSegmentGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDragGestureRecognizer {
      alloc<R = MSDragSegmentGestureRecognizer>(): R;
      new: <R = MSDragSegmentGestureRecognizer>() => R;
    }
  }
}

declare const MSDragSegmentGestureRecognizer: cocoa.MSDragSegmentGestureRecognizer.CLASS;
