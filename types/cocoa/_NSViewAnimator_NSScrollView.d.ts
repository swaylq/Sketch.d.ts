/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAnimator_NSScrollView<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {
    setMagnification_centeredAtPoint<R = void, P0 = number, P1 = CGPoint>(_setMagnification: P0, _centeredAtPoint: P1): R;
    magnifyToFitRect<R = void, P0 = CGRect>(_magnifyToFitRect: P0): R;
  }
  namespace _NSViewAnimator_NSScrollView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {}
  }
}
