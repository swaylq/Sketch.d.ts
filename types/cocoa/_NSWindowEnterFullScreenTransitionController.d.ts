/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowEnterFullScreenTransitionController<T0 = void, T1 = void, T2 = void> extends _NSEnterFullScreenTransitionController {
    _getPossibleCustomWindowsForEnteringIntoFullScreen<R = unknown>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
  }
  namespace _NSWindowEnterFullScreenTransitionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSEnterFullScreenTransitionController {
      alloc<R = _NSWindowEnterFullScreenTransitionController>(): R;
      new: <R = _NSWindowEnterFullScreenTransitionController>() => R;
    }
  }
}
