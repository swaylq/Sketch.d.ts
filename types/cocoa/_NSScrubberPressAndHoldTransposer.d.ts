/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrubberPressAndHoldTransposer<T0 = void, T1 = void, T2 = void> extends NSTouchBarStandardPopoverTransposer {
    _sendTransposedEvent_toGestureRecognizers<R = void, P0 = unknown, P1 = unknown>(__sendTransposedEvent: P0, _toGestureRecognizers: P1): R;
  }
  namespace _NSScrubberPressAndHoldTransposer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarStandardPopoverTransposer {
      alloc<R = _NSScrubberPressAndHoldTransposer>(): R;
      new: <R = _NSScrubberPressAndHoldTransposer>() => R;
    }
  }
}
