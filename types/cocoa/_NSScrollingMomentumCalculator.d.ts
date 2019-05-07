/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingMomentumCalculator<T0 = void, T1 = void, T2 = void> extends NSObject {
    calculateToReachDestination<R = void>(): R;
    calculateDestination<R = void>(): R;
    positionAfterDuration<R = CGPoint, P0 = number>(_positionAfterDuration: P0): R;
    velocityAfterDuration<R = number, P0 = number>(_velocityAfterDuration: P0): R;
    initWithInitialOrigin_velocity_documentFrame_constrainedClippingOrigin_clippingSize<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGRect, P3 = CGPoint, P4 = CGSize>(_initWithInitialOrigin: P0, _velocity: P1, _documentFrame: P2, _constrainedClippingOrigin: P3, _clippingSize: P4): R;
    initWithInitialOrigin_velocity_documentFrame_constrainedClippingOrigin_clippingSize_tolerance<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGRect, P3 = CGPoint, P4 = CGSize, P5 = CGSize>(_initWithInitialOrigin: P0, _velocity: P1, _documentFrame: P2, _constrainedClippingOrigin: P3, _clippingSize: P4, _tolerance: P5): R;
    initWithInitialOrigin_velocity_documentFrame_constrainedClippingOrigin_clippingSize_tolerance_maxDuration<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGRect, P3 = CGPoint, P4 = CGSize, P5 = CGSize, P6 = number>(_initWithInitialOrigin: P0, _velocity: P1, _documentFrame: P2, _constrainedClippingOrigin: P3, _clippingSize: P4, _tolerance: P5, _maxDuration: P6): R;
    durationUntilStop<R = number>(): R;
    documentFrame<R = CGRect>(): R;
    setDocumentFrame<R = void, P0 = CGRect>(_v: P0): R;
    destinationOrigin<R = CGPoint>(): R;
    setDestinationOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    initialOrigin<R = CGPoint>(): R;
    setInitialOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    tolerance<R = CGSize>(): R;
    setTolerance<R = void, P0 = CGSize>(_v: P0): R;
    shouldRoundCalculations<R = boolean>(): R;
    setShouldRoundCalculations<R = void, P0 = boolean>(_v: P0): R;
    clippingSize<R = CGSize>(): R;
    setClippingSize<R = void, P0 = CGSize>(_v: P0): R;
    constrainedClippingOrigin<R = CGPoint>(): R;
    setConstrainedClippingOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    decelerationRate<R = number>(): R;
    setDecelerationRate<R = void, P0 = number>(_v: P0): R;
    horizontalScrollDecelerationFactor<R = number>(): R;
    setHorizontalScrollDecelerationFactor<R = void, P0 = number>(_v: P0): R;
    initialVelocity<R = CGPoint>(): R;
    setInitialVelocity<R = void, P0 = CGPoint>(_v: P0): R;
    verticalScrollDecelerationFactor<R = number>(): R;
    setVerticalScrollDecelerationFactor<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSScrollingMomentumCalculator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSScrollingMomentumCalculator>(): R;
      new: <R = _NSScrollingMomentumCalculator>() => R;
    }
  }
}
