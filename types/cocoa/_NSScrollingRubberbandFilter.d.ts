/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingRubberbandFilter<T0 = void, T1 = void, T2 = void> extends NSObject {
    addDelta_velocity<R = void, P0 = CGPoint, P1 = CGPoint>(_addDelta: P0, _velocity: P1): R;
    threadSafeAccess<R = void, P0 = CDUnknownBlockType>(_threadSafeAccess: P0): R;
    dealloc<R = void>(): R;
    initWithDocumentFrame_constrainedClippingOrigin_clippingSize_isFlipped_pointsPerPixel<R = unknown, P0 = CGRect, P1 = CGPoint, P2 = CGSize, P3 = boolean, P4 = number>(_initWithDocumentFrame: P0, _constrainedClippingOrigin: P1, _clippingSize: P2, _isFlipped: P3, _pointsPerPixel: P4): R;
    filteredVelocity<R = CGPoint>(): R;
    filteredDelta<R = CGPoint>(): R;
    stiffness<R = number>(): R;
    setStiffness<R = void, P0 = number>(_v: P0): R;
    pointsPerPixel<R = number>(): R;
    setPointsPerPixel<R = void, P0 = number>(_v: P0): R;
    affineTransformOfContent<R = CGAffineTransform>(): R;
    setAffineTransformOfContent<R = void, P0 = CGAffineTransform>(_v: P0): R;
    documentFrame<R = CGRect>(): R;
    setDocumentFrame<R = void, P0 = CGRect>(_v: P0): R;
    clippingSize<R = CGSize>(): R;
    setClippingSize<R = void, P0 = CGSize>(_v: P0): R;
    constrainedClippingOrigin<R = CGPoint>(): R;
    setConstrainedClippingOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    stretched<R = boolean>(): R;
    scrollPosition<R = CGPoint>(): R;
    setScrollPosition<R = void, P0 = CGPoint>(_v: P0): R;
    allowsVerticalRubberbanding<R = boolean>(): R;
    setAllowsVerticalRubberbanding<R = void, P0 = boolean>(_v: P0): R;
    allowsHorizontalRubberbanding<R = boolean>(): R;
    setAllowsHorizontalRubberbanding<R = void, P0 = boolean>(_v: P0): R;
    flipped<R = boolean>(): R;
    setFlipped<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSScrollingRubberbandFilter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSScrollingRubberbandFilter>(): R;
      new: <R = _NSScrollingRubberbandFilter>() => R;
      initialize<R = void>(): R;
    }
  }
}
