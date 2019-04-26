/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObserverList<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSObserverList {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSObserverList>(): R;
      new: <R = _NSObserverList>() => R;
      destroyObserverListForObject<R = void, P0 = unknown>(_destroyObserverListForObject: P0): R;
    }
  }
}
