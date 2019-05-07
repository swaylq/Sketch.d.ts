/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLayoutConstraintAnimator<T0 = void, T1 = void, T2 = void> extends _NSObjectAnimator {
    setConstant<R = void, P0 = number>(_setConstant: P0): R;
  }
  namespace _NSLayoutConstraintAnimator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSObjectAnimator {}
  }
}
