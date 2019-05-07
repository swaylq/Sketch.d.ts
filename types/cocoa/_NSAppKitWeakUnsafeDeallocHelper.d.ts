/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAppKitWeakUnsafeDeallocHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    _isDeallocating<R = boolean>(): R;
    _tryRetain<R = boolean>(): R;
    invalidate<R = void>(): R;
    initForObject_storedAtLocation<R = unknown, P0 = unknown, P1 = unknown>(_initForObject: P0, _storedAtLocation: P1): R;
  }
  namespace _NSAppKitWeakUnsafeDeallocHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSAppKitWeakUnsafeDeallocHelper>(): R;
      new: <R = _NSAppKitWeakUnsafeDeallocHelper>() => R;
      helperForObject_storedAtLocation<R = unknown, P0 = unknown, P1 = unknown>(_helperForObject: P0, _storedAtLocation: P1): R;
    }
  }
}
