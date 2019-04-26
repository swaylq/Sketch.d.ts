/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueObservationInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    _initWithObservances_count_hashValue<R = unknown, P0 = unknown, P1 = number, P2 = number>(__initWithObservances: P0, _count: P1, _hashValue: P2): R;
    _copyByAddingObservance<R = unknown, P0 = unknown>(__copyByAddingObservance: P0): R;
  }
  namespace NSKeyValueObservationInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSKeyValueObservationInfo>(): R;
      new: <R = NSKeyValueObservationInfo>() => R;
    }
  }
}

declare const NSKeyValueObservationInfo: cocoa.NSKeyValueObservationInfo.CLASS;
