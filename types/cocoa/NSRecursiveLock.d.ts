/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRecursiveLock<T0 = void, T1 = void, T2 = void> extends NSObject, NSLockingProtocol {
    isLocking<R = boolean>(): R;
    description<R = unknown>(): R;
    tryLock<R = boolean>(): R;
    lockBeforeDate<R = boolean, P0 = unknown>(_lockBeforeDate: P0): R;
    dealloc<R = void>(): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSRecursiveLock {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLockingProtocol {
      alloc<R = NSRecursiveLock>(): R;
      new: <R = NSRecursiveLock>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSRecursiveLock: cocoa.NSRecursiveLock.CLASS;
