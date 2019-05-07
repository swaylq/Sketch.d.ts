/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileOverlayLayer<T0 = void, T1 = void, T2 = void> extends CALayer {
    endPresentation<R = void>(): R;
    applyPresentationFilters<R = void, P0 = boolean>(_applyPresentationFilters: P0): R;
    updateFrame<R = void>(): R;
    updateFrameUsingCoveredWindowTileFrame<R = void, P0 = CGRect>(_updateFrameUsingCoveredWindowTileFrame: P0): R;
    positionAuxiliaryView<R = void>(): R;
    tileID<R = number>(): R;
    addWindowWithID<R = void, P0 = number>(_addWindowWithID: P0): R;
    initWithTileID_parentSpaceID_coveredWindowTileFrame_window_tileDividerDirections<R = unknown, P0 = number, P1 = number, P2 = CGRect, P3 = unknown, P4 = number>(_initWithTileID: P0, _parentSpaceID: P1, _coveredWindowTileFrame: P2, _window: P3, _tileDividerDirections: P4): R;
    dealloc<R = void>(): R;
    auxiliaryView<R = NSView>(): R;
    setAuxiliaryView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace _NSFullScreenTileOverlayLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CALayer {}
  }
}
