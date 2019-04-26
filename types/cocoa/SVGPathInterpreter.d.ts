/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGPathInterpreter<T0 = void, T1 = void, T2 = void> extends NSObject {
    requiresInitialPointForPath<R = void, P0 = unknown>(_requiresInitialPointForPath: P0): R;
    appendAComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendAComponents: P0, _toBezierPath: P1): R;
    appendaComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendaComponents: P0, _toBezierPath: P1): R;
    appendvComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendvComponents: P0, _toBezierPath: P1): R;
    appendhComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendhComponents: P0, _toBezierPath: P1): R;
    appendVComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendVComponents: P0, _toBezierPath: P1): R;
    appendHComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendHComponents: P0, _toBezierPath: P1): R;
    appendTComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendTComponents: P0, _toBezierPath: P1): R;
    appendtComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendtComponents: P0, _toBezierPath: P1): R;
    appendQComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendQComponents: P0, _toBezierPath: P1): R;
    appendqComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendqComponents: P0, _toBezierPath: P1): R;
    lastControlReflectedQuadratic<R = CGPoint>(): R;
    appendSComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendSComponents: P0, _toBezierPath: P1): R;
    appendsComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendsComponents: P0, _toBezierPath: P1): R;
    appendsComponents_toBezierPath_lastPoint<R = void, P0 = unknown, P1 = unknown, P2 = CGPoint>(_appendsComponents: P0, _toBezierPath: P1, _lastPoint: P2): R;
    appendCComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendCComponents: P0, _toBezierPath: P1): R;
    appendcComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendcComponents: P0, _toBezierPath: P1): R;
    appendcComponents_toBezierPath_lastPoint<R = void, P0 = unknown, P1 = unknown, P2 = CGPoint>(_appendcComponents: P0, _toBezierPath: P1, _lastPoint: P2): R;
    lastControlReflectedCubic<R = CGPoint>(): R;
    lastControlPointReflectedForPreviousCommandIn<R = CGPoint, P0 = string>(_lastControlPointReflectedForPreviousCommandIn: P0): R;
    reflectLastControlPoint<R = CGPoint>(): R;
    appendCurveQuadPoint1_quadPoint2_toBezierPath<R = void, P0 = CGPoint, P1 = CGPoint, P2 = unknown>(_appendCurveQuadPoint1: P0, _quadPoint2: P1, _toBezierPath: P2): R;
    appendlComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendlComponents: P0, _toBezierPath: P1): R;
    appendmComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendmComponents: P0, _toBezierPath: P1): R;
    appendLComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendLComponents: P0, _toBezierPath: P1): R;
    appendMComponents_toBezierPath<R = void, P0 = unknown, P1 = unknown>(_appendMComponents: P0, _toBezierPath: P1): R;
    bezierPathFromCommands_isPathClosed<R = unknown, P0 = unknown, P1 = string>(_bezierPathFromCommands: P0, _isPathClosed: P1): R;
    bezierPathFromPoints<R = unknown, P0 = unknown>(_bezierPathFromPoints: P0): R;
    lastCommand<R = boolean>(): R;
    setLastCommand<R = void, P0 = boolean>(_v: P0): R;
    lastControl<R = CGPoint>(): R;
    setLastControl<R = void, P0 = CGPoint>(_v: P0): R;
    lastPoint<R = CGPoint>(): R;
    setLastPoint<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace SVGPathInterpreter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = SVGPathInterpreter>(): R;
      new: <R = SVGPathInterpreter>() => R;
    }
  }
}

declare const SVGPathInterpreter: cocoa.SVGPathInterpreter.CLASS;
