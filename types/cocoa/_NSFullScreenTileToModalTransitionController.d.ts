/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileToModalTransitionController<T0 = void, T1 = void, T2 = void> extends _NSFullScreenTransitionController {
    _transitionComplete<R = void>(): R;
    _performAnimation<R = void>(): R;
    _moveWindowToFinalState<R = void>(): R;
    _setupAndPresentOverlayWindow<R = void>(): R;
    destinationSpace<R = unknown>(): R;
    startingSpace<R = unknown>(): R;
    initFromWindow<R = unknown, P0 = unknown>(_initFromWindow: P0): R;
  }
  namespace _NSFullScreenTileToModalTransitionController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSFullScreenTransitionController {
      alloc<R = _NSFullScreenTileToModalTransitionController>(): R;
      new: <R = _NSFullScreenTileToModalTransitionController>() => R;
      transitionFromWindow<R = unknown, P0 = unknown>(_transitionFromWindow: P0): R;
    }
  }
}
