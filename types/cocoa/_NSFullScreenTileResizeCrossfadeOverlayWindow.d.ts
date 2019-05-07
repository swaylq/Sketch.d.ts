/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileResizeCrossfadeOverlayWindow<T0 = void, T1 = void, T2 = void> extends NSPanel {
    disableAutomaticTermination<R = void>(): R;
    enableAutomaticTermination<R = void>(): R;
    close<R = void>(): R;
    constrainFrameRect_toScreen<R = CGRect, P0 = CGRect, P1 = unknown>(_constrainFrameRect: P0, _toScreen: P1): R;
    _setWindowTag<R = void>(): R;
    _shouldAutoFlattenLayerTree<R = boolean>(): R;
    animateSwapWithDuration_completionHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_animateSwapWithDuration: P0, _completionHandler: P1): R;
    configureAnimationToFinalStateWithDuration<R = void, P0 = number>(_configureAnimationToFinalStateWithDuration: P0): R;
    closingTileTargetFrame<R = CGRect>(): R;
    captureAfterWindowsUsingTileFrame<R = void, P0 = CGRect>(_captureAfterWindowsUsingTileFrame: P0): R;
    captureBeforeWindowsUsingTileFrame<R = void, P0 = CGRect>(_captureBeforeWindowsUsingTileFrame: P0): R;
    doFinalBeforeSetupWithAfterFrame<R = void, P0 = CGRect>(_doFinalBeforeSetupWithAfterFrame: P0): R;
    windowIDsForCaptureOnSpace<R = unknown, P0 = number>(_windowIDsForCaptureOnSpace: P0): R;
    windowIDsForCaptureOnSpace_predicate<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_windowIDsForCaptureOnSpace: P0, _predicate: P1): R;
    initWithTileID_parentSpaceID_closingSpaceID_screen_doResize_placeInWallSpace<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown, P4 = boolean, P5 = boolean>(_initWithTileID: P0, _parentSpaceID: P1, _closingSpaceID: P2, _screen: P3, _doResize: P4, _placeInWallSpace: P5): R;
    openingSpaceID<R = number>(): R;
    setOpeningSpaceID<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSFullScreenTileResizeCrossfadeOverlayWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = _NSFullScreenTileResizeCrossfadeOverlayWindow>(): R;
      new: <R = _NSFullScreenTileResizeCrossfadeOverlayWindow>() => R;
    }
  }
}
