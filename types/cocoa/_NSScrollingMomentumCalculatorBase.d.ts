/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollingMomentumCalculatorBase<T0 = void, T1 = void, T2 = void> extends _NSScrollingMomentumCalculator {
    setDecelerationRate<R = void, P0 = number>(_setDecelerationRate: P0): R;
    decelerationRate<R = number>(): R;
    setTolerance<R = void, P0 = CGSize>(_setTolerance: P0): R;
    tolerance<R = CGSize>(): R;
    setClippingSize<R = void, P0 = CGSize>(_setClippingSize: P0): R;
    clippingSize<R = CGSize>(): R;
    setConstrainedClippingOrigin<R = void, P0 = CGPoint>(_setConstrainedClippingOrigin: P0): R;
    constrainedClippingOrigin<R = CGPoint>(): R;
    setInitialVelocity<R = void, P0 = CGPoint>(_setInitialVelocity: P0): R;
    initialVelocity<R = CGPoint>(): R;
    setDocumentFrame<R = void, P0 = CGRect>(_setDocumentFrame: P0): R;
    documentFrame<R = CGRect>(): R;
    setDestinationOrigin<R = void, P0 = CGPoint>(_setDestinationOrigin: P0): R;
    destinationOrigin<R = CGPoint>(): R;
    setInitialOrigin<R = void, P0 = CGPoint>(_setInitialOrigin: P0): R;
    initialOrigin<R = CGPoint>(): R;
    setVerticalScrollDecelerationFactor<R = void, P0 = number>(_setVerticalScrollDecelerationFactor: P0): R;
    verticalScrollDecelerationFactor<R = number>(): R;
    setHorizontalScrollDecelerationFactor<R = void, P0 = number>(_setHorizontalScrollDecelerationFactor: P0): R;
    horizontalScrollDecelerationFactor<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSScrollingMomentumCalculatorBase {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSScrollingMomentumCalculator {
      alloc<R = _NSScrollingMomentumCalculatorBase>(): R;
      new: <R = _NSScrollingMomentumCalculatorBase>() => R;
    }
  }
}
