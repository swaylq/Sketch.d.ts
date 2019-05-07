/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBezierInterpreter<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    points<R = unknown>(): R;
    rect<R = CGRect>(): R;
    setRect<R = void, P0 = CGRect>(_v: P0): R;
    bezierPath<R = NSBezierPath>(): R;
    setBezierPath<R = void, P0 = NSBezierPath>(_v: P0): R;
  }
  namespace MSBezierInterpreter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBezierInterpreter>(): R;
      new: <R = MSBezierInterpreter>() => R;
      pointsFromBezierPath_inRect<R = unknown, P0 = unknown, P1 = CGRect>(_pointsFromBezierPath: P0, _inRect: P1): R;
    }
  }
}

declare const MSBezierInterpreter: cocoa.MSBezierInterpreter.CLASS;
