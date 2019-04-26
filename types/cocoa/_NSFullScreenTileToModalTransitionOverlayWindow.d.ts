/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileToModalTransitionOverlayWindow<T0 = void, T1 = void, T2 = void> extends _NSFullScreenTileResizeCrossfadeOverlayWindow {
    captureAfterWindowsUsingTileFrame_collapsedTabWindow<R = void, P0 = CGRect, P1 = unknown>(_captureAfterWindowsUsingTileFrame: P0, _collapsedTabWindow: P1): R;
  }
  namespace _NSFullScreenTileToModalTransitionOverlayWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSFullScreenTileResizeCrossfadeOverlayWindow {
      alloc<R = _NSFullScreenTileToModalTransitionOverlayWindow>(): R;
      new: <R = _NSFullScreenTileToModalTransitionOverlayWindow>() => R;
    }
  }
}
