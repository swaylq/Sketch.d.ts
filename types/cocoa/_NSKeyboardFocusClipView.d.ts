/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyboardFocusClipView<T0 = void, T1 = void, T2 = void> extends NSClipView {
    _getFocusRingFrame<R = CGRect>(): R;
    _clearFocusForView<R = void>(): R;
    _adjustFocusRingLocation<R = void, P0 = CGPoint>(__adjustFocusRingLocation: P0): R;
    _adjustFocusRingSize<R = void, P0 = CGSize>(__adjustFocusRingSize: P0): R;
    _setFocusForCell_forView_withFrame_withFocusRingFrame_withInset<R = void, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = CGRect, P4 = number>(__setFocusForCell: P0, _forView: P1, _withFrame: P2, _withFocusRingFrame: P3, _withInset: P4): R;
    _drawKeyboardFocusRingWithFrame_forCell<R = void, P0 = CGRect, P1 = unknown>(__drawKeyboardFocusRingWithFrame: P0, _forCell: P1): R;
    _drawKeyboardFocusRingWithFrame<R = void, P0 = CGRect>(__drawKeyboardFocusRingWithFrame: P0): R;
    _setKeyboardFocusRingNeedsDisplay<R = void>(): R;
  }
  namespace _NSKeyboardFocusClipView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSClipView {
      alloc<R = _NSKeyboardFocusClipView>(): R;
      new: <R = _NSKeyboardFocusClipView>() => R;
    }
  }
}
