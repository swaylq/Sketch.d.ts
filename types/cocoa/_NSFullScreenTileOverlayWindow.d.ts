/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileOverlayWindow<T0 = void, T1 = void, T2 = void> extends NSPanel {
    disableAutomaticTermination<R = void>(): R;
    enableAutomaticTermination<R = void>(): R;
    constrainFrameRect_toScreen<R = CGRect, P0 = CGRect, P1 = unknown>(_constrainFrameRect: P0, _toScreen: P1): R;
    updateOverlay<R = void>(): R;
    endPresentationWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_endPresentationWithCompletionHandler: P0): R;
    beginPresentationWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_beginPresentationWithCompletionHandler: P0): R;
    applyPresentationFiltersWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_applyPresentationFiltersWithCompletionHandler: P0): R;
    _setWindowTag<R = void>(): R;
    _shouldAutoFlattenLayerTree<R = boolean>(): R;
    sendEvent<R = void, P0 = unknown>(_sendEvent: P0): R;
    addAuxiliaryView_alignedTileID<R = void, P0 = unknown, P1 = number>(_addAuxiliaryView: P0, _alignedTileID: P1): R;
    _ignoreForFullScreenTransition<R = boolean>(): R;
    initWithActiveTileID_coverTileID_coveredWindowTileFrame_parentSpaceID_ignoreEvents_screen_joinTileID<R = unknown, P0 = number, P1 = number, P2 = CGRect, P3 = number, P4 = boolean, P5 = unknown, P6 = number>(_initWithActiveTileID: P0, _coverTileID: P1, _coveredWindowTileFrame: P2, _parentSpaceID: P3, _ignoreEvents: P4, _screen: P5, _joinTileID: P6): R;
    useLiveTileRect<R = boolean>(): R;
    setUseLiveTileRect<R = void, P0 = boolean>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    applyBlur<R = boolean>(): R;
    setApplyBlur<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSFullScreenTileOverlayWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = _NSFullScreenTileOverlayWindow>(): R;
      new: <R = _NSFullScreenTileOverlayWindow>() => R;
    }
  }
}
