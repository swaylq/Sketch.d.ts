/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCondition<T0 = void, T1 = void, T2 = void> extends NSObject, NSLockingProtocol {
    description<R = unknown>(): R;
    broadcast<R = void>(): R;
    signal<R = void>(): R;
    waitUntilDate<R = boolean, P0 = unknown>(_waitUntilDate: P0): R;
    wait<R = void>(): R;
    dealloc<R = void>(): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSCondition {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLockingProtocol {
      alloc<R = NSCondition>(): R;
      new: <R = NSCondition>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSCondition: cocoa.NSCondition.CLASS;
