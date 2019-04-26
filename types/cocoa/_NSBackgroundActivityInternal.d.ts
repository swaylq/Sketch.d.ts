/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBackgroundActivityInternal<T0 = void, T1 = void, T2 = void> extends NSObject {
    setAdditionalProperties<R = void, P0 = unknown>(_setAdditionalProperties: P0): R;
    additionalProperties<R = unknown>(): R;
    setCurrentActivity<R = void, P0 = unknown>(_setCurrentActivity: P0): R;
    currentActivity<R = unknown>(): R;
    dealloc<R = void>(): R;
    appRefresh<R = boolean>(): R;
    setAppRefresh<R = void, P0 = boolean>(_v: P0): R;
    repeats<R = boolean>(): R;
    setRepeats<R = void, P0 = boolean>(_v: P0): R;
    checkInHandler<R = CDUnknownBlockType>(): R;
    setCheckInHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    delay<R = number>(): R;
    setDelay<R = void, P0 = number>(_v: P0): R;
    preregistered<R = boolean>(): R;
    setPreregistered<R = void, P0 = boolean>(_v: P0): R;
    qualityOfService<R = number>(): R;
    setQualityOfService<R = void, P0 = number>(_v: P0): R;
    activity<R = CDUnknownBlockType>(): R;
    setActivity<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    tolerance<R = number>(): R;
    setTolerance<R = void, P0 = number>(_v: P0): R;
    interval<R = number>(): R;
    setInterval<R = void, P0 = number>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace _NSBackgroundActivityInternal {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSBackgroundActivityInternal>(): R;
      new: <R = _NSBackgroundActivityInternal>() => R;
    }
  }
}
