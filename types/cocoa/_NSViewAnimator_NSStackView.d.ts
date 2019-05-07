/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewAnimator_NSStackView<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {
    removeArrangedSubview<R = void, P0 = unknown>(_removeArrangedSubview: P0): R;
    insertArrangedSubview_atIndex<R = void, P0 = unknown, P1 = number>(_insertArrangedSubview: P0, _atIndex: P1): R;
    addArrangedSubview<R = void, P0 = unknown>(_addArrangedSubview: P0): R;
    removeView<R = void, P0 = unknown>(_removeView: P0): R;
    insertView_atIndex_inGravity<R = void, P0 = unknown, P1 = number, P2 = number>(_insertView: P0, _atIndex: P1, _inGravity: P2): R;
    addView_withGravity<R = void, P0 = unknown, P1 = number>(_addView: P0, _withGravity: P1): R;
    setVisibilityPriority_forView<R = void, P0 = number, P1 = unknown>(_setVisibilityPriority: P0, _forView: P1): R;
    setDistribution<R = void, P0 = number>(_setDistribution: P0): R;
    setOrientation<R = void, P0 = number>(_setOrientation: P0): R;
    setAlignment<R = void, P0 = number>(_setAlignment: P0): R;
    setEdgeInsets<R = void, P0 = NSEdgeInsets>(_setEdgeInsets: P0): R;
    setCustomSpacing_afterView<R = void, P0 = number, P1 = unknown>(_setCustomSpacing: P0, _afterView: P1): R;
    setSpacing<R = void, P0 = number>(_setSpacing: P0): R;
    stackViewTarget<R = unknown>(): R;
  }
  namespace _NSViewAnimator_NSStackView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSViewAnimator {}
  }
}
