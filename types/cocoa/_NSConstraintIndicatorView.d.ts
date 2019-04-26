/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConstraintIndicatorView<T0 = void, T1 = void, T2 = void> extends NSView {
    drawRect_asBorder_withLineThickness_forceColor<R = void, P0 = CGRect, P1 = boolean, P2 = number, P3 = unknown>(_drawRect: P0, _asBorder: P1, _withLineThickness: P2, _forceColor: P3): R;
    roundRectInBase<R = CGRect, P0 = CGRect>(_roundRectInBase: P0): R;
    constraintDescription<R = unknown>(): R;
    isFlipped<R = boolean>(): R;
    representedConstraint<R = NSLayoutConstraint>(): R;
    setRepresentedConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
  }
  namespace _NSConstraintIndicatorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSConstraintIndicatorView>(): R;
      new: <R = _NSConstraintIndicatorView>() => R;
    }
  }
}
