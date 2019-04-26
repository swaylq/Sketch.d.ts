/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServiceRequestorInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithRequestor<R = unknown, P0 = unknown>(_initWithRequestor: P0): R;
  }
  namespace _NSServiceRequestorInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSServiceRequestorInfo>(): R;
      new: <R = _NSServiceRequestorInfo>() => R;
    }
  }
}
