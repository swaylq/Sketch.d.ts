/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIOSurfacePool<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithSurfaceProperties<R = unknown, P0 = unknown>(_initWithSurfaceProperties: P0): R;
    nextUnusedSurface<R = IOSurface>(): R;
  }
  namespace NSIOSurfacePool {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSIOSurfacePool>(): R;
      new: <R = NSIOSurfacePool>() => R;
    }
  }
}

declare const NSIOSurfacePool: cocoa.NSIOSurfacePool.CLASS;
