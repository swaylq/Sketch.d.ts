/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSizeIndicatorView<T = any> extends _NSConstraintIndicatorView {
    initWithRect_isHorizontal<R = unknown, P0 = CGRect, P1 = boolean>(_initWithRect: P0, _isHorizontal: P1): R;
  }
  namespace classes {
    export interface _NSSizeIndicatorView<T = any> extends _NSConstraintIndicatorView {
      alloc<R = _NSSizeIndicatorView>(): R;
      new: <R = _NSSizeIndicatorView>() => R;
    }
  }
}