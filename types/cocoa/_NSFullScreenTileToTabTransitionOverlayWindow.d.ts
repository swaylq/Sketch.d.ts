/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileToTabTransitionOverlayWindow<T0 = void, T1 = void, T2 = void> extends _NSFullScreenTileResizeCrossfadeOverlayWindow {
    captureAfterWindowsUsingTileFrame_destinationTab<R = void, P0 = CGRect, P1 = unknown>(_captureAfterWindowsUsingTileFrame: P0, _destinationTab: P1): R;
  }
  namespace _NSFullScreenTileToTabTransitionOverlayWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSFullScreenTileResizeCrossfadeOverlayWindow {
      alloc<R = _NSFullScreenTileToTabTransitionOverlayWindow>(): R;
      new: <R = _NSFullScreenTileToTabTransitionOverlayWindow>() => R;
    }
  }
}
