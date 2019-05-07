/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSDock<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    initWithFrame_orientation<R = unknown, P0 = CGRect, P1 = number>(_initWithFrame: P0, _orientation: P1): R;
    updatedDockForDisplays<R = unknown, P0 = unknown>(_updatedDockForDisplays: P0): R;
    orientation<R = number>(): R;
    frame<R = CGRect>(): R;
  }
  namespace NSCGSDock {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCGSDock>(): R;
      new: <R = NSCGSDock>() => R;
      currentDockForDisplays<R = unknown, P0 = unknown>(_currentDockForDisplays: P0): R;
    }
  }
}

declare const NSCGSDock: cocoa.NSCGSDock.CLASS;
