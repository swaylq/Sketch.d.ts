/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingConcurrentEventMonitor<T0 = void, T1 = void, T2 = void> extends NSObject {
    _monitorEvent<R = void, P0 = unknown>(__monitorEvent: P0): R;
    consumePropertiesWithBlock<R = void, P0 = CDUnknownBlockType>(_consumePropertiesWithBlock: P0): R;
    threadSafeMultiPropertyAccess<R = void, P0 = CDUnknownBlockType>(_threadSafeMultiPropertyAccess: P0): R;
    stopMonitoring<R = void>(): R;
    startMonitoring<R = void>(): R;
    dealloc<R = void>(): R;
    initWithEvent_predominantAxisMode<R = unknown, P0 = unknown, P1 = number>(_initWithEvent: P0, _predominantAxisMode: P1): R;
    deviceType<R = number>(): R;
    scrollStateDelegate<R = _NSScrollStateEventListener>(): R;
    setScrollStateDelegate<R = void, P0 = _NSScrollStateEventListener>(_v: P0): R;
    eventProcessingHandler<R = CDUnknownBlockType>(): R;
    setEventProcessingHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    predominantAxisMode<R = number>(): R;
    setPredominantAxisMode<R = void, P0 = number>(_v: P0): R;
    deltaIsAccelerated<R = boolean>(): R;
    shouldStopMonitoringOnMomentumEnd<R = boolean>(): R;
    setShouldStopMonitoringOnMomentumEnd<R = void, P0 = boolean>(_v: P0): R;
    wantsGestureEvents<R = boolean>(): R;
    setWantsGestureEvents<R = void, P0 = boolean>(_v: P0): R;
    shouldIgnoreConsumption<R = boolean>(): R;
    setShouldIgnoreConsumption<R = void, P0 = boolean>(_v: P0): R;
    shouldCoalesceDeltas<R = boolean>(): R;
    setShouldCoalesceDeltas<R = void, P0 = boolean>(_v: P0): R;
    shouldUseUnacceleratedDelta<R = boolean>(): R;
    setShouldUseUnacceleratedDelta<R = void, P0 = boolean>(_v: P0): R;
    velocity<R = CGPoint>(): R;
    delta<R = CGPoint>(): R;
  }
  namespace _NSScrollingConcurrentEventMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSScrollingConcurrentEventMonitor>(): R;
      new: <R = _NSScrollingConcurrentEventMonitor>() => R;
      initialize<R = void>(): R;
    }
  }
}
