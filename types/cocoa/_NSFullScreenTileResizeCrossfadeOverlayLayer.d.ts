/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileResizeCrossfadeOverlayLayer<T0 = void, T1 = void, T2 = void> extends CALayer {
    resizeForTileFrame<R = void, P0 = CGRect>(_resizeForTileFrame: P0): R;
    tileFrame<R = CGRect>(): R;
    tileID<R = number>(): R;
    addWindowsWithIDs<R = void, P0 = unknown>(_addWindowsWithIDs: P0): R;
    setWindowContents<R = void, P0 = unknown>(_setWindowContents: P0): R;
    initWithTileID_parentSpaceID_tileFrame_includeBorder_window<R = unknown, P0 = number, P1 = number, P2 = CGRect, P3 = boolean, P4 = unknown>(_initWithTileID: P0, _parentSpaceID: P1, _tileFrame: P2, _includeBorder: P3, _window: P4): R;
    dealloc<R = void>(): R;
  }
  namespace _NSFullScreenTileResizeCrossfadeOverlayLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CALayer {}
  }
}
