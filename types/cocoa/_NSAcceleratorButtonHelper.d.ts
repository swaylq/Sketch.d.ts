/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAcceleratorButtonHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    _scheduleTimer<R = void>(): R;
    _acceleratorTimerFired<R = void, P0 = unknown>(__acceleratorTimerFired: P0): R;
    accelerationChanged<R = void, P0 = number>(_accelerationChanged: P0): R;
    levelChanged_withMaximum<R = void, P0 = number, P1 = number>(_levelChanged: P0, _withMaximum: P1): R;
    pressComplete<R = void>(): R;
    pressStarted<R = void, P0 = boolean>(_pressStarted: P0): R;
    dealloc<R = void>(): R;
    initWithCell<R = unknown, P0 = unknown>(_initWithCell: P0): R;
    timer<R = NSTimer>(): R;
    setTimer<R = void, P0 = NSTimer>(_v: P0): R;
    cell<R = _NSAcceleratorCell>(): R;
  }
  namespace _NSAcceleratorButtonHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSAcceleratorButtonHelper>(): R;
      new: <R = _NSAcceleratorButtonHelper>() => R;
      defaultPeriodicInterval<R = number>(): R;
      defaultPeriodicDelay<R = number>(): R;
      accelerationForGestureAmount<R = number, P0 = number>(_accelerationForGestureAmount: P0): R;
    }
  }
}
