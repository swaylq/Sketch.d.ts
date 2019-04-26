/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMoveHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    _stopAnimation<R = void>(): R;
    _doAnimation<R = void>(): R;
    _resizeWindow_toFrame_display<R = void, P0 = unknown, P1 = CGRect, P2 = boolean>(__resizeWindow: P0, _toFrame: P1, _display: P2): R;
    dealloc<R = void>(): R;
    _releaseEffect<R = void>(): R;
    _effect<R = void>(): R;
    _collapsePanel_andMoveParent_toFrame_animate<R = void, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = boolean>(__collapsePanel: P0, _andMoveParent: P1, _toFrame: P2, _animate: P3): R;
    _moveParent_andExpandPanel_toFrame_animate<R = void, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = boolean>(__moveParent: P0, _andExpandPanel: P1, _toFrame: P2, _animate: P3): R;
    _moveParent_andResizeSheet_toFrame<R = void, P0 = unknown, P1 = unknown, P2 = CGRect>(__moveParent: P0, _andResizeSheet: P1, _toFrame: P2): R;
    _closeSheet_andMoveParent<R = void, P0 = unknown, P1 = unknown>(__closeSheet: P0, _andMoveParent: P1): R;
    _moveParent_andOpenSheet<R = void, P0 = unknown, P1 = unknown>(__moveParent: P0, _andOpenSheet: P1): R;
    _animateSheet<R = void>(): R;
    _animatePanel<R = void>(): R;
    _startSheet<R = void>(): R;
    _hasSheetFactor<R = boolean, P0 = number>(__hasSheetFactor: P0): R;
    _positionWindow<R = void>(): R;
    _parentFrameDeltaForCurrentProgress<R = CGSize>(): R;
    _startMove<R = void>(): R;
  }
  namespace NSMoveHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSMoveHelper>(): R;
      new: <R = NSMoveHelper>() => R;
      _windowAnimationVelocity<R = number>(): R;
    }
  }
}

declare const NSMoveHelper: cocoa.NSMoveHelper.CLASS;
