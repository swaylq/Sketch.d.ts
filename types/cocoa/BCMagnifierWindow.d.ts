/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagnifierWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    setCurrentColor<R = void, P0 = unknown>(_setCurrentColor: P0): R;
    updateScreenGrabIfNeeded<R = void, P0 = unknown>(_updateScreenGrabIfNeeded: P0): R;
    mouseMovedTo<R = void, P0 = CGPoint>(_mouseMovedTo: P0): R;
    initWithScreenGrab_frameOffset<R = unknown, P0 = unknown, P1 = CGPoint>(_initWithScreenGrab: P0, _frameOffset: P1): R;
    frameForWindowAroundMouse<R = CGRect>(): R;
    screenFrame<R = CGRect>(): R;
    setScreenFrame<R = void, P0 = CGRect>(_v: P0): R;
    frameOffset<R = CGPoint>(): R;
  }
  namespace BCMagnifierWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = BCMagnifierWindow>(): R;
      new: <R = BCMagnifierWindow>() => R;
    }
  }
}

declare const BCMagnifierWindow: cocoa.BCMagnifierWindow.CLASS;
