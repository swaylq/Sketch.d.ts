/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDistributedLock<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    breakLock<R = void>(): R;
    unlock<R = void>(): R;
    tryLock<R = boolean>(): R;
    dealloc<R = void>(): R;
    invalidate<R = void>(): R;
    initWithPath<R = unknown, P0 = unknown>(_initWithPath: P0): R;
    lockDate<R = NSDate>(): R;
  }
  namespace NSDistributedLock {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDistributedLock>(): R;
      new: <R = NSDistributedLock>() => R;
      lockWithPath<R = unknown, P0 = unknown>(_lockWithPath: P0): R;
    }
  }
}

declare const NSDistributedLock: cocoa.NSDistributedLock.CLASS;
