/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSConcreteUUID<T0 = void, T1 = void, T2 = void> extends NSUUID {
    classForCoder<R = unknown>(): R;
    debugDescription<R = unknown>(): R;
    description<R = unknown>(): R;
    UUIDString<R = unknown>(): R;
    _cfUUIDBytes<R = unknown>(): R;
  }
  namespace __NSConcreteUUID {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUUID {
      alloc<R = __NSConcreteUUID>(): R;
      new: <R = __NSConcreteUUID>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}
