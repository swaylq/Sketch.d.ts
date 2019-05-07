/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDistanceIndicatorView<T0 = void, T1 = void, T2 = void> extends _NSConstraintIndicatorView {
    initWithEdge_ofRect_andEdge_ofRect_isHorizontal<R = unknown, P0 = number, P1 = CGRect, P2 = number, P3 = CGRect, P4 = boolean>(_initWithEdge: P0, _ofRect: P1, _andEdge: P2, _ofRect1: P3, _isHorizontal: P4): R;
  }
  namespace _NSDistanceIndicatorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSConstraintIndicatorView {
      alloc<R = _NSDistanceIndicatorView>(): R;
      new: <R = _NSDistanceIndicatorView>() => R;
    }
  }
}
