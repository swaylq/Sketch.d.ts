/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileOverlayWindow<T = any> extends cocoa.NSPanel {
    disableAutomaticTermination<R = void>(): R;
    enableAutomaticTermination<R = void>(): R;
    updateOverlay<R = void>(): R;
    endPresentationWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_endPresentationWithCompletionHandler: P0): R;
    beginPresentationWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_beginPresentationWithCompletionHandler: P0): R;
    applyPresentationFiltersWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_applyPresentationFiltersWithCompletionHandler: P0): R;
    addAuxiliaryView_alignedTileID<R = void, P0 = unknown, P1 = number>(_addAuxiliaryView: P0, _alignedTileID: P1): R;
    initWithActiveTileID_coverTileID_coveredWindowTileFrame_parentSpaceID_ignoreEvents_screen_joinTileID<R = unknown, P0 = number, P1 = number, P2 = cocoa.CGRect, P3 = number, P4 = boolean, P5 = unknown, P6 = number>(_initWithActiveTileID: P0, _coverTileID: P1, _coveredWindowTileFrame: P2, _parentSpaceID: P3, _ignoreEvents: P4, _screen: P5, _joinTileID: P6): R;
    useLiveTileRect<R = boolean>(): R;
    setUseLiveTileRect<R = void, P0 = boolean>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    applyBlur<R = boolean>(): R;
    setApplyBlur<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenTileOverlayWindow<T = any> extends cocoa.classes.NSPanel {
      alloc<R = _NSFullScreenTileOverlayWindow>(): R;
      new: <R = _NSFullScreenTileOverlayWindow>() => R;
    }
  }
}
