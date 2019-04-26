/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFindIndicatorOverlayView<T0 = void, T1 = void, T2 = void> extends NSView {
    _holes<R = unknown>(): R;
    _updateHoles<R = void>(): R;
    isFlipped<R = boolean>(): R;
    initWithTextFinderImpl_flipped<R = unknown, P0 = unknown, P1 = boolean>(_initWithTextFinderImpl: P0, _flipped: P1): R;
  }
  namespace _NSFindIndicatorOverlayView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSFindIndicatorOverlayView>(): R;
      new: <R = _NSFindIndicatorOverlayView>() => R;
    }
  }
}
