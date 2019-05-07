/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCommandeeringMap<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    handler<R = CDUnknownBlockType>(): R;
    setHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    observerID<R = unknown>(): R;
    setObserverID<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace _NSCommandeeringMap {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSCommandeeringMap>(): R;
      new: <R = _NSCommandeeringMap>() => R;
    }
  }
}
