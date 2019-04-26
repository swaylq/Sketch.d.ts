/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDatePickerArrowCell<T0 = void, T1 = void, T2 = void> extends NSActionCell {
    setAlternateImage<R = void, P0 = unknown>(_setAlternateImage: P0): R;
    alternateImage<R = unknown>(): R;
    _updateMouseTracking<R = void>(): R;
    _hasTrackingGesture<R = boolean>(): R;
    _rescheduleTimer<R = void>(): R;
    _scheduleTimer<R = void>(): R;
    _initialTimerDelay<R = number>(): R;
    _timerInterval<R = number>(): R;
    _invalidateTimer<R = void>(): R;
    _timerDidFire<R = void>(): R;
    _sendAction<R = void>(): R;
    doubleValue<R = number>(): R;
    setDoubleValue<R = void, P0 = number>(_setDoubleValue: P0): R;
  }
  namespace _NSDatePickerArrowCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSActionCell {
      alloc<R = _NSDatePickerArrowCell>(): R;
      new: <R = _NSDatePickerArrowCell>() => R;
    }
  }
}
