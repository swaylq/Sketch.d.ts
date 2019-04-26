/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDistanceLayoutDimension<T0 = void, T1 = void, T2 = void> extends NSLayoutDimension, NSCompositeLayoutAnchorProtocol {
    initWithMinuend_subtrahend<R = unknown, P0 = unknown, P1 = unknown>(_initWithMinuend: P0, _subtrahend: P1): R;
    _childAnchors<R = NSArray>(): R;
  }
  namespace _NSDistanceLayoutDimension {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLayoutDimension, NSCompositeLayoutAnchorProtocol {
      alloc<R = _NSDistanceLayoutDimension>(): R;
      new: <R = _NSDistanceLayoutDimension>() => R;
      distanceFromAnchor_toAnchor<R = unknown, P0 = unknown, P1 = unknown>(_distanceFromAnchor: P0, _toAnchor: P1): R;
    }
  }
}
