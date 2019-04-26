/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAutoreleasePool<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    drain<R = void>(): R;
  }
  namespace NSAutoreleasePool {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAutoreleasePool>(): R;
      new: <R = NSAutoreleasePool>() => R;
      resetTotalAutoreleasedObjects<R = void>(): R;
      totalAutoreleasedObjects<R = number>(): R;
      setPoolCountHighWaterResolution<R = void, P0 = number>(_setPoolCountHighWaterResolution: P0): R;
      poolCountHighWaterResolution<R = number>(): R;
      setPoolCountHighWaterMark<R = void, P0 = number>(_setPoolCountHighWaterMark: P0): R;
      poolCountHighWaterMark<R = number>(): R;
      enableFreedObjectCheck<R = void, P0 = boolean>(_enableFreedObjectCheck: P0): R;
      enableRelease<R = void, P0 = boolean>(_enableRelease: P0): R;
      autoreleasePoolExists<R = boolean>(): R;
      topAutoreleasePoolCount<R = number>(): R;
      autoreleasedObjectCount<R = number>(): R;
      releaseAllPools<R = void>(): R;
      showPools<R = void>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSAutoreleasePool: cocoa.NSAutoreleasePool.CLASS;
