/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSArithmeticLayoutDimension<T0 = void, T1 = void, T2 = void> extends NSLayoutDimension, NSCompositeLayoutAnchorProtocol {
    initWithMultiplier_dimension_constant<R = unknown, P0 = number, P1 = unknown, P2 = number>(_initWithMultiplier: P0, _dimension: P1, _constant: P2): R;
    _childAnchors<R = NSArray>(): R;
  }
  namespace _NSArithmeticLayoutDimension {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLayoutDimension, NSCompositeLayoutAnchorProtocol {
      alloc<R = _NSArithmeticLayoutDimension>(): R;
      new: <R = _NSArithmeticLayoutDimension>() => R;
    }
  }
}
