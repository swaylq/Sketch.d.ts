/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarSliderPopoverTransposer<T0 = void, T1 = void, T2 = void> extends NSTouchBarPressAndHoldTransposer {
    _continuationTimeoutFired<R = void, P0 = unknown>(__continuationTimeoutFired: P0): R;
    touchCancelled_withEvent<R = void, P0 = unknown, P1 = unknown>(_touchCancelled: P0, _withEvent: P1): R;
    touchEnded_withEvent<R = boolean, P0 = unknown, P1 = unknown>(_touchEnded: P0, _withEvent: P1): R;
    transposeTouch<R = void, P0 = unknown>(_transposeTouch: P0): R;
    beginTransposingWithTouch<R = void, P0 = unknown>(_beginTransposingWithTouch: P0): R;
    minimumRequiredDistance<R = number>(): R;
    dealloc<R = void>(): R;
    initWithDestinationSlider<R = unknown, P0 = unknown>(_initWithDestinationSlider: P0): R;
    initWithSourceFrame_destinationContentView_frame<R = unknown, P0 = CGRect, P1 = unknown, P2 = CGRect>(_initWithSourceFrame: P0, _destinationContentView: P1, _frame: P2): R;
    continuationTimeout<R = number>(): R;
    setContinuationTimeout<R = void, P0 = number>(_v: P0): R;
    continuationBehavior<R = number>(): R;
    setContinuationBehavior<R = void, P0 = number>(_v: P0): R;
    slider<R = NSSlider>(): R;
    setSlider<R = void, P0 = NSSlider>(_v: P0): R;
  }
  namespace NSTouchBarSliderPopoverTransposer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarPressAndHoldTransposer {
      alloc<R = NSTouchBarSliderPopoverTransposer>(): R;
      new: <R = NSTouchBarSliderPopoverTransposer>() => R;
    }
  }
}

declare const NSTouchBarSliderPopoverTransposer: cocoa.NSTouchBarSliderPopoverTransposer.CLASS;
