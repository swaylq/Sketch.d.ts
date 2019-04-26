/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSWindowSurface<T0 = void, T1 = void, T2 = void> extends NSObject {
    orderOut<R = void>(): R;
    orderBelowWindow<R = void>(): R;
    orderAboveWindow<R = void>(): R;
    orderBelowSurface<R = void, P0 = unknown>(_orderBelowSurface: P0): R;
    orderAboveSurface<R = void, P0 = unknown>(_orderAboveSurface: P0): R;
    orderIn<R = void>(): R;
    frame<R = CGRect>(): R;
    setFrame<R = void, P0 = CGRect>(_v: P0): R;
    surfaceID<R = number>(): R;
    window<R = NSCGSWindow>(): R;
  }
  namespace NSCGSWindowSurface {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCGSWindowSurface>(): R;
      new: <R = NSCGSWindowSurface>() => R;
      synchronize<R = void>(): R;
    }
  }
}

declare const NSCGSWindowSurface: cocoa.NSCGSWindowSurface.CLASS;
