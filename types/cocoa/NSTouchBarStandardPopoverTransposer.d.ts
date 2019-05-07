/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarStandardPopoverTransposer<T0 = void, T1 = void, T2 = void> extends NSTouchBarPressAndHoldTransposer {
    transposeTouch<R = void, P0 = unknown>(_transposeTouch: P0): R;
    tranposePoint<R = CGPoint, P0 = CGPoint>(_tranposePoint: P0): R;
    transposedTouchFromTouch_toLocation_prevLocation_phase_view<R = unknown, P0 = unknown, P1 = CGPoint, P2 = CGPoint, P3 = number, P4 = unknown>(_transposedTouchFromTouch: P0, _toLocation: P1, _prevLocation: P2, _phase: P3, _view: P4): R;
    dealloc<R = void>(): R;
    initWithSourceFrame_destinationContentView_frame<R = unknown, P0 = CGRect, P1 = unknown, P2 = CGRect>(_initWithSourceFrame: P0, _destinationContentView: P1, _frame: P2): R;
  }
  namespace NSTouchBarStandardPopoverTransposer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarPressAndHoldTransposer {
      alloc<R = NSTouchBarStandardPopoverTransposer>(): R;
      new: <R = NSTouchBarStandardPopoverTransposer>() => R;
    }
  }
}

declare const NSTouchBarStandardPopoverTransposer: cocoa.NSTouchBarStandardPopoverTransposer.CLASS;
