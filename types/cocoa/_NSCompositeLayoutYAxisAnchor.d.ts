/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCompositeLayoutYAxisAnchor<T0 = void, T1 = void, T2 = void> extends NSLayoutYAxisAnchor, NSCompositeLayoutAnchorProtocol {
    initWithAnchor_plusDimension_times_plus<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_initWithAnchor: P0, _plusDimension: P1, _times: P2, _plus: P3): R;
    _childAnchors<R = NSArray>(): R;
  }
  namespace _NSCompositeLayoutYAxisAnchor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLayoutYAxisAnchor, NSCompositeLayoutAnchorProtocol {
      alloc<R = _NSCompositeLayoutYAxisAnchor>(): R;
      new: <R = _NSCompositeLayoutYAxisAnchor>() => R;
    }
  }
}
