/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserColumnScrollHelper<T0 = void, T1 = void, T2 = void> extends NSObject {
    changeDestinationToRect<R = void, P0 = CGRect>(_changeDestinationToRect: P0): R;
    scrollRectToVisible_inScrollView_animate<R = void, P0 = CGRect, P1 = unknown, P2 = boolean>(_scrollRectToVisible: P0, _inScrollView: P1, _animate: P2): R;
    setOptimizableColumn<R = void, P0 = unknown>(_setOptimizableColumn: P0): R;
    _doAnimation<R = void>(): R;
    _enclosingBrowserView<R = unknown>(): R;
    _stopAnimation<R = void>(): R;
    _doAnimationStep<R = void>(): R;
    _scrollToFinalPosition<R = void>(): R;
    _scrollToPosition<R = void, P0 = number>(__scrollToPosition: P0): R;
    dealloc<R = void>(): R;
    _invalidateRunLoopTimer<R = void>(): R;
    _setupRunLoopTimer<R = void>(): R;
  }
  namespace _NSBrowserColumnScrollHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSBrowserColumnScrollHelper>(): R;
      new: <R = _NSBrowserColumnScrollHelper>() => R;
    }
  }
}
