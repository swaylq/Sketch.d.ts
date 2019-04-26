/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRect<T0 = void, T1 = void, T2 = void> extends _MSRect, MSRectProtocol {
    isIntegral<R = boolean>(): R;
    setRectByIgnoringProportions<R = void, P0 = CGRect>(_setRectByIgnoringProportions: P0): R;
    setConstrainProportions<R = void, P0 = boolean>(_setConstrainProportions: P0): R;
    calculateProportions<R = void>(): R;
    description<R = unknown>(): R;
    log<R = void>(): R;
    containsPoint<R = boolean, P0 = CGPoint>(_containsPoint: P0): R;
    scaleBy<R = unknown, P0 = number>(_scaleBy: P0): R;
    makeRectIntegral<R = void>(): R;
    makeOriginIntegral<R = void>(): R;
    setY<R = void, P0 = number>(_setY: P0): R;
    setX<R = void, P0 = number>(_setX: P0): R;
    setHeight<R = void, P0 = number>(_setHeight: P0): R;
    delegate<R = unknown>(): R;
    setWidth<R = void, P0 = number>(_setWidth: P0): R;
    shouldConstrainProportions<R = boolean>(): R;
    performUpdatesWithUnconstrainedProportions<R = void, P0 = CDUnknownBlockType>(_performUpdatesWithUnconstrainedProportions: P0): R;
    initWithRect<R = unknown, P0 = CGRect>(_initWithRect: P0): R;
    initWithX_y_width_height<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_initWithX: P0, _y: P1, _width: P2, _height: P3): R;
    proportions<R = number>(): R;
    setProportions<R = void, P0 = number>(_v: P0): R;
    bottom<R = number>(): R;
    setBottom<R = void, P0 = number>(_v: P0): R;
    right<R = number>(): R;
    setRight<R = void, P0 = number>(_v: P0): R;
    mid<R = CGPoint>(): R;
    setMid<R = void, P0 = CGPoint>(_v: P0): R;
    primitiveConstrainProportions<R = boolean>(): R;
    setPrimitiveConstrainProportions<R = void, P0 = boolean>(_v: P0): R;
    midY<R = number>(): R;
    setMidY<R = void, P0 = number>(_v: P0): R;
    midX<R = number>(): R;
    setMidX<R = void, P0 = number>(_v: P0): R;
    maxY<R = number>(): R;
    setMaxY<R = void, P0 = number>(_v: P0): R;
    minY<R = number>(): R;
    setMinY<R = void, P0 = number>(_v: P0): R;
    maxX<R = number>(): R;
    setMaxX<R = void, P0 = number>(_v: P0): R;
    minX<R = number>(): R;
    setMinX<R = void, P0 = number>(_v: P0): R;
    top<R = number>(): R;
    setTop<R = void, P0 = number>(_v: P0): R;
    left<R = number>(): R;
    setLeft<R = void, P0 = number>(_v: P0): R;
    origin<R = CGPoint>(): R;
    setOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    size<R = CGSize>(): R;
    setSize<R = void, P0 = CGSize>(_v: P0): R;
    rect<R = CGRect>(): R;
    setRect<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace MSRect {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSRect, MSRectProtocol {
      alloc<R = MSRect>(): R;
      new: <R = MSRect>() => R;
      rectWithUnionOfRects<R = unknown, P0 = unknown>(_rectWithUnionOfRects: P0): R;
      rectWithRect<R = unknown, P0 = CGRect>(_rectWithRect: P0): R;
      rectWithX_y_width_height<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_rectWithX: P0, _y: P1, _width: P2, _height: P3): R;
    }
  }
}

declare const MSRect: cocoa.MSRect.CLASS;
