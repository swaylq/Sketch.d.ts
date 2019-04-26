/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMultiReadUniWriteLock<T0 = void, T1 = void, T2 = void> extends NSObject, NSLockingProtocol {
    name<R = unknown>(): R;
    setName<R = void, P0 = unknown>(_setName: P0): R;
    description<R = unknown>(): R;
    lockForWritingBeforeDate<R = boolean, P0 = unknown>(_lockForWritingBeforeDate: P0): R;
    tryLockForWriting<R = boolean>(): R;
    lockForWriting<R = void>(): R;
    lockForReadingBeforeDate<R = boolean, P0 = unknown>(_lockForReadingBeforeDate: P0): R;
    tryLockForReading<R = boolean>(): R;
    lockForReading<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSMultiReadUniWriteLock {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLockingProtocol {
      alloc<R = NSMultiReadUniWriteLock>(): R;
      new: <R = NSMultiReadUniWriteLock>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSMultiReadUniWriteLock: cocoa.NSMultiReadUniWriteLock.CLASS;
