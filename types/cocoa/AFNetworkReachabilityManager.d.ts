/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFNetworkReachabilityManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    setReachabilityStatusChangeBlock<R = void, P0 = CDUnknownBlockType>(_setReachabilityStatusChangeBlock: P0): R;
    localizedNetworkReachabilityStatusString<R = unknown>(): R;
    stopMonitoring<R = void>(): R;
    startMonitoring<R = void>(): R;
    dealloc<R = void>(): R;
    initWithReachability<R = unknown, P0 = __SCNetworkReachability>(_initWithReachability: P0): R;
    networkReachabilityStatusBlock<R = CDUnknownBlockType>(): R;
    setNetworkReachabilityStatusBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    networkReachability<R = unknown>(): R;
    setNetworkReachability<R = void, P0 = unknown>(_v: P0): R;
    networkReachabilityStatus<R = number>(): R;
    setNetworkReachabilityStatus<R = void, P0 = number>(_v: P0): R;
    reachableViaWiFi<R = boolean>(): R;
    reachableViaWWAN<R = boolean>(): R;
    reachable<R = boolean>(): R;
  }
  namespace AFNetworkReachabilityManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = AFNetworkReachabilityManager>(): R;
      new: <R = AFNetworkReachabilityManager>() => R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
      managerForAddress<R = unknown, P0 = void>(_managerForAddress: P0): R;
      managerForDomain<R = unknown, P0 = unknown>(_managerForDomain: P0): R;
      sharedManager<R = unknown>(): R;
    }
  }
}

declare const AFNetworkReachabilityManager: cocoa.AFNetworkReachabilityManager.CLASS;
