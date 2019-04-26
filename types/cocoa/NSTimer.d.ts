/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTimer<T0 = void, T1 = void, T2 = void> {
    // + NSTimer(NSTimer): 
    _cffireTime<R = number>(): R;
    context<R = unknown>(): R;
    setFireTime<R = void, P0 = number>(_setFireTime: P0): R;
    fireTime<R = number>(): R;
    interval<R = number>(): R;
    order<R = number>(): R;
    copyDebugDescription<R = __CFString>(): R;
    userInfo<R = unknown>(): R;
    setFireDate<R = void, P0 = unknown>(_setFireDate: P0): R;
    fireDate<R = unknown>(): R;
    fire<R = void>(): R;
    setTolerance<R = void, P0 = number>(_setTolerance: P0): R;
    tolerance<R = number>(): R;
    timeInterval<R = number>(): R;
    isValid<R = boolean>(): R;
    invalidate<R = void>(): R;
    initWithFireDate_interval_target_selector_userInfo_repeats<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = string, P4 = unknown, P5 = boolean>(_initWithFireDate: P0, _interval: P1, _target: P2, _selector: P3, _userInfo: P4, _repeats: P5): R;
    initWithFireDate_interval_repeats_block<R = unknown, P0 = unknown, P1 = number, P2 = boolean, P3 = CDUnknownBlockType>(_initWithFireDate: P0, _interval: P1, _repeats: P2, _block: P3): R;
  }
  namespace NSTimer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSTimer(NSTimer): 
      timerWithFireDate_target_selector_userInfo<R = unknown, P0 = unknown, P1 = unknown, P2 = string, P3 = unknown>(_timerWithFireDate: P0, _target: P1, _selector: P2, _userInfo: P3): R;
      scheduledTimerWithTimeInterval_repeats_block<R = unknown, P0 = number, P1 = boolean, P2 = CDUnknownBlockType>(_scheduledTimerWithTimeInterval: P0, _repeats: P1, _block: P2): R;
      timerWithTimeInterval_repeats_block<R = unknown, P0 = number, P1 = boolean, P2 = CDUnknownBlockType>(_timerWithTimeInterval: P0, _repeats: P1, _block: P2): R;
      scheduledTimerWithTimeInterval_target_selector_userInfo_repeats<R = unknown, P0 = number, P1 = unknown, P2 = string, P3 = unknown, P4 = boolean>(_scheduledTimerWithTimeInterval: P0, _target: P1, _selector: P2, _userInfo: P3, _repeats: P4): R;
      timerWithTimeInterval_target_selector_userInfo_repeats<R = unknown, P0 = number, P1 = unknown, P2 = string, P3 = unknown, P4 = boolean>(_timerWithTimeInterval: P0, _target: P1, _selector: P2, _userInfo: P3, _repeats: P4): R;
      scheduledTimerWithTimeInterval_invocation_repeats<R = unknown, P0 = number, P1 = unknown, P2 = boolean>(_scheduledTimerWithTimeInterval: P0, _invocation: P1, _repeats: P2): R;
      timerWithTimeInterval_invocation_repeats<R = unknown, P0 = number, P1 = unknown, P2 = boolean>(_timerWithTimeInterval: P0, _invocation: P1, _repeats: P2): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSTimer: cocoa.NSTimer.CLASS;
