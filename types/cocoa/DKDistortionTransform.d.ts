/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface DKDistortionTransform<T0 = void, T1 = void, T2 = void> extends NSObject {
    transformPath_inRect<R = unknown, P0 = unknown, P1 = CGRect>(_transformPath: P0, _inRect: P1): R;
    transformPoint_fromRect<R = CGPoint, P0 = CGPoint, P1 = CGRect>(_transformPoint: P0, _fromRect: P1): R;
    invert<R = void>(): R;
    differentialPerspectiveBy<R = void, P0 = number>(_differentialPerspectiveBy: P0): R;
    shearVerticallyBy<R = void, P0 = number>(_shearVerticallyBy: P0): R;
    shearHorizontallyBy<R = void, P0 = number>(_shearHorizontallyBy: P0): R;
    offsetByX_byY<R = void, P0 = number, P1 = number>(_offsetByX: P0, _byY: P1): R;
    bounds<R = CGRect>(): R;
    getEnvelopePoints<R = void, P0 = CGPoint>(_getEnvelopePoints: P0): R;
    setEnvelopePoints<R = void, P0 = CGPoint>(_setEnvelopePoints: P0): R;
    initWithEnvelope<R = unknown, P0 = CGPoint>(_initWithEnvelope: P0): R;
    initWithRect<R = unknown, P0 = CGRect>(_initWithRect: P0): R;
  }
  namespace DKDistortionTransform {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = DKDistortionTransform>(): R;
      new: <R = DKDistortionTransform>() => R;
      transformWithInitialRect<R = unknown, P0 = CGRect>(_transformWithInitialRect: P0): R;
    }
  }
}

declare const DKDistortionTransform: cocoa.DKDistortionTransform.CLASS;
