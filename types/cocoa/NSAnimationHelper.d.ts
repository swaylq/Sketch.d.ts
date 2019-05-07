/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimationHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    _doAnimationStep<R = void>(): R;
    _resetTimer<R = void>(): R;
    _progress<R = number>(): R;
    _stopRun<R = void>(): R;
    _continueRunWithStartTime_duration<R = void, P0 = number, P1 = number>(__continueRunWithStartTime: P0, _duration: P1): R;
    _startRunWithDuration_firingInterval<R = void, P0 = number, P1 = number>(__startRunWithDuration: P0, _firingInterval: P1): R;
    _runBlockingWithDuration_firingInterval<R = void, P0 = number, P1 = number>(__runBlockingWithDuration: P0, _firingInterval: P1): R;
    _doFinalAnimationStep<R = void>(): R;
    _doAnimationStepWithProgress<R = void, P0 = number>(__doAnimationStepWithProgress: P0): R;
    _timeRemaining<R = number>(): R;
    _isAnimating<R = boolean>(): R;
    dealloc<R = void>(): R;
    _destroyTimer<R = void>(): R;
    _doRunLoop<R = void>(): R;
    _createTimer<R = void>(): R;
  }
  namespace NSAnimationHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAnimationHelper>(): R;
      new: <R = NSAnimationHelper>() => R;
    }
  }
}

declare const NSAnimationHelper: cocoa.NSAnimationHelper.CLASS;
