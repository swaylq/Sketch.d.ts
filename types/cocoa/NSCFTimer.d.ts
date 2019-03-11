/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCFTimer<T = any> extends cocoa.NSTimer {
    init<R = unknown>(): R;
    initWithFireDate_interval_target_selector_userInfo_repeats<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = string, P4 = unknown, P5 = boolean>(_initWithFireDate: P0, _interval: P1, _target: P2, _selector: P3, _userInfo: P4, _repeats: P5): R;
    _cfTypeID<R = number>(): R;
    fire<R = void>(): R;
    userInfo<R = unknown>(): R;
    setFireDate<R = void, P0 = unknown>(_setFireDate: P0): R;
    fireDate<R = unknown>(): R;
    invalidate<R = void>(): R;
    setTolerance<R = void, P0 = number>(_setTolerance: P0): R;
    tolerance<R = number>(): R;
    timeInterval<R = number>(): R;
    isValid<R = boolean>(): R;
    retainCount<R = number>(): R;
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    hash<R = number>(): R;
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
  }
  namespace classes {
    export interface NSCFTimer<T = any> extends cocoa.classes.NSTimer {
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSCFTimer: cocoa.classes.NSCFTimer;
