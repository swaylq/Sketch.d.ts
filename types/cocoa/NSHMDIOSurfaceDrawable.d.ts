/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDIOSurfaceDrawable<T0 = void, T1 = void, T2 = void> extends NSObject {
    presentAtTimestamp<R = void, P0 = number>(_presentAtTimestamp: P0): R;
    dealloc<R = void>(): R;
    initWithSession_SLSHMDDrawable<R = unknown, P0 = unknown, P1 = unknown>(_initWithSession: P0, _SLSHMDDrawable: P1): R;
    debugSignpost<R = number>(): R;
    setDebugSignpost<R = void, P0 = number>(_v: P0): R;
    inputTimeStamp<R = number>(): R;
    setInputTimeStamp<R = void, P0 = number>(_v: P0): R;
    IOSurface<R = IOSurface>(): R;
    session<R = NSHMDIOSurfaceSession>(): R;
  }
  namespace NSHMDIOSurfaceDrawable {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSHMDIOSurfaceDrawable>(): R;
      new: <R = NSHMDIOSurfaceDrawable>() => R;
    }
  }
}

declare const NSHMDIOSurfaceDrawable: cocoa.NSHMDIOSurfaceDrawable.CLASS;
