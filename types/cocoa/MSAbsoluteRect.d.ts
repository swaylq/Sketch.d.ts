/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAbsoluteRect<T0 = void, T1 = void, T2 = void> extends BCRect {
    cxx_destruct<R = void>(): R;
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    setRect<R = void, P0 = CGRect>(_setRect: P0): R;
    rect<R = CGRect>(): R;
    setHeight<R = void, P0 = number>(_setHeight: P0): R;
    height<R = number>(): R;
    setWidth<R = void, P0 = number>(_setWidth: P0): R;
    width<R = number>(): R;
    y<R = number>(): R;
    moveInAbsoluteCoordinatesBy<R = void, P0 = CGPoint>(_moveInAbsoluteCoordinatesBy: P0): R;
    setY<R = void, P0 = number>(_setY: P0): R;
    setX<R = void, P0 = number>(_setX: P0): R;
    x<R = number>(): R;
    boundsContainsPoint<R = boolean, P0 = CGPoint>(_boundsContainsPoint: P0): R;
    bezierBoundsInAbsoluteCoordinates<R = unknown>(): R;
    absoluteRect<R = CGRect>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    observationInfo<R = void>(): R;
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    initWithLayer<R = unknown, P0 = unknown>(_initWithLayer: P0): R;
    layer<R = MSLayer>(): R;
    setLayer<R = void, P0 = MSLayer>(_v: P0): R;
    rulerOrigin<R = CGPoint>(): R;
    setRulerOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    rulerY<R = number>(): R;
    setRulerY<R = void, P0 = number>(_v: P0): R;
    rulerX<R = number>(): R;
    setRulerX<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSAbsoluteRect {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCRect {}
  }
}

declare const MSAbsoluteRect: cocoa.MSAbsoluteRect.CLASS;
