/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBackgroundActivityScheduler<T = any> extends cocoa.NSObject {
    invalidate<R = void>(): R;
    scheduleWithBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_scheduleWithBlock: P0): R;
    _updateCriteriaForCompletedActivity<R = void, P0 = unknown>(__updateCriteriaForCompletedActivity: P0): R;
    _updateCriteria<R = void, P0 = unknown>(__updateCriteria: P0): R;
    _setAdditionalXPCActivityProperties<R = void, P0 = unknown>(__setAdditionalXPCActivityProperties: P0): R;
    dealloc<R = void>(): R;
    initWithIdentifier<R = unknown, P0 = unknown>(_initWithIdentifier: P0): R;
    shouldDefer<R = boolean>(): R;
    checkInHandler<R = cocoa.CDUnknownBlockType>(): R;
    setCheckInHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    delay<R = number>(): R;
    setDelay<R = void, P0 = number>(_v: P0): R;
    preregistered<R = boolean>(): R;
    setPreregistered<R = void, P0 = boolean>(_v: P0): R;
    tolerance<R = number>(): R;
    setTolerance<R = void, P0 = number>(_v: P0): R;
    interval<R = number>(): R;
    setInterval<R = void, P0 = number>(_v: P0): R;
    _appRefresh<R = boolean>(): R;
    set_appRefresh<R = void, P0 = boolean>(_v: P0): R;
    repeats<R = boolean>(): R;
    setRepeats<R = void, P0 = boolean>(_v: P0): R;
    qualityOfService<R = number>(): R;
    setQualityOfService<R = void, P0 = number>(_v: P0): R;
    identifier<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSBackgroundActivityScheduler<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSBackgroundActivityScheduler>(): R;
      new: <R = NSBackgroundActivityScheduler>() => R;
    }
  }
}

declare const NSBackgroundActivityScheduler: cocoa.classes.NSBackgroundActivityScheduler;
