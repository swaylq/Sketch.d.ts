/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTearOffTabWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    restoreWindowOnDockDeath<R = unknown>(): R;
    didDetachWindow<R = boolean>(): R;
    mouseUpAfterMissionControl<R = void>(): R;
    enteredMissionControlWithTab<R = void>(): R;
    detachedWindow<R = unknown>(): R;
    _refreshTilingConstraints<R = void, P0 = boolean>(__refreshTilingConstraints: P0): R;
    _setWindowTag<R = void>(): R;
    detachAndMoveWindowToSpaceIfNecessary<R = boolean>(): R;
    shouldDisableTabBarDropTargets<R = boolean>(): R;
    beginServerSideWindowDragUsingOffset<R = void, P0 = CGSize>(_beginServerSideWindowDragUsingOffset: P0): R;
    _resolveAutomaticEnterFullScreenFlags<R = void>(): R;
    _wantsFullScreenTileDropTargets<R = boolean>(): R;
    canEnterFullScreenMode<R = boolean>(): R;
    initWithContentRect_tornFromWindow<R = unknown, P0 = CGRect, P1 = unknown>(_initWithContentRect: P0, _tornFromWindow: P1): R;
    tabDelegate<R = NSTearOffTabWindowDelegate>(): R;
    setTabDelegate<R = void, P0 = NSTearOffTabWindowDelegate>(_v: P0): R;
  }
  namespace NSTearOffTabWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSTearOffTabWindow>(): R;
      new: <R = NSTearOffTabWindow>() => R;
    }
  }
}

declare const NSTearOffTabWindow: cocoa.NSTearOffTabWindow.CLASS;
