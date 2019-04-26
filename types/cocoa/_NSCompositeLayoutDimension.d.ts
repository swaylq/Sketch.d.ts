/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCompositeLayoutDimension<T0 = void, T1 = void, T2 = void> extends NSLayoutDimension, NSCompositeLayoutAnchorProtocol {
    initWithDimension_plusDimension<R = unknown, P0 = unknown, P1 = unknown>(_initWithDimension: P0, _plusDimension: P1): R;
    initWithDimension_plusDimension_times<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithDimension: P0, _plusDimension: P1, _times: P2): R;
    _childAnchors<R = NSArray>(): R;
  }
  namespace _NSCompositeLayoutDimension {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSLayoutDimension, NSCompositeLayoutAnchorProtocol {
      alloc<R = _NSCompositeLayoutDimension>(): R;
      new: <R = _NSCompositeLayoutDimension>() => R;
    }
  }
}
