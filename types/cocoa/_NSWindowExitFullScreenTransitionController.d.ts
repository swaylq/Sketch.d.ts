/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowExitFullScreenTransitionController<T0 = void, T1 = void, T2 = void> extends _NSExitFullScreenTransitionController {
    _getPossibleCustomWindowsForExitingFullScreen<R = unknown>(): R;
    initForExitingContentController<R = unknown, P0 = unknown>(_initForExitingContentController: P0): R;
  }
  namespace _NSWindowExitFullScreenTransitionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSExitFullScreenTransitionController {
      alloc<R = _NSWindowExitFullScreenTransitionController>(): R;
      new: <R = _NSWindowExitFullScreenTransitionController>() => R;
    }
  }
}
