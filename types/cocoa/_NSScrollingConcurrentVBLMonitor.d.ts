/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentVBLMonitor<T0 = void, T1 = void, T2 = void> extends NSObject {
    remove<R = void>(): R;
    suspend<R = void>(): R;
    resume<R = void>(): R;
    _synchronizeForVBLSerialNumber_timestamp_updateDuration<R = void, P0 = number, P1 = number, P2 = number>(__synchronizeForVBLSerialNumber: P0, _timestamp: P1, _updateDuration: P2): R;
    _updateScrollAnimation<R = void>(): R;
    _checkCursorTargeting<R = void>(): R;
    dealloc<R = void>(): R;
    initWithConstantData<R = unknown, P0 = unknown>(_initWithConstantData: P0): R;
    mainThreadSynchronizer<R = _NSScrollingConcurrentMainThreadSynchronizer>(): R;
    setMainThreadSynchronizer<R = void, P0 = _NSScrollingConcurrentMainThreadSynchronizer>(_v: P0): R;
    preprocessFilter<R = _NSScrollingConcurrentVBLPreprocessFilter>(): R;
    setPreprocessFilter<R = void, P0 = _NSScrollingConcurrentVBLPreprocessFilter>(_v: P0): R;
    constantData<R = _NSScrollingConcurrentConstantData>(): R;
    setConstantData<R = void, P0 = _NSScrollingConcurrentConstantData>(_v: P0): R;
    sharedData<R = _NSScrollingConcurrentSharedData>(): R;
    setSharedData<R = void, P0 = _NSScrollingConcurrentSharedData>(_v: P0): R;
    scrollStateDelegate<R = _NSScrollStateEventListener>(): R;
    setScrollStateDelegate<R = void, P0 = _NSScrollStateEventListener>(_v: P0): R;
    cursorTargetFrame<R = CGRect>(): R;
    setCursorTargetFrame<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace _NSScrollingConcurrentVBLMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSScrollingConcurrentVBLMonitor>(): R;
      new: <R = _NSScrollingConcurrentVBLMonitor>() => R;
    }
  }
}
