/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRadialGradientEventHandler<T0 = void, T1 = void, T2 = void> extends MSGradientEventHandler {
    setEllipsePoint<R = void, P0 = CGPoint>(_setEllipsePoint: P0): R;
    ellipsePoint<R = CGPoint>(): R;
    ovalPath<R = unknown>(): R;
    mouseIsNearEllipsePoint<R = boolean, P0 = CGPoint>(_mouseIsNearEllipsePoint: P0): R;
  }
  namespace MSRadialGradientEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSGradientEventHandler {
      alloc<R = MSRadialGradientEventHandler>(): R;
      new: <R = MSRadialGradientEventHandler>() => R;
    }
  }
}

declare const MSRadialGradientEventHandler: cocoa.MSRadialGradientEventHandler.CLASS;
