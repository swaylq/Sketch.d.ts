/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerSelectionDrawing<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSLayerSelectionDrawing {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLayerSelectionDrawing>(): R;
      new: <R = MSLayerSelectionDrawing>() => R;
      strokeWidthForZoomValue<R = number, P0 = number>(_strokeWidthForZoomValue: P0): R;
      drawBorderWithRect_zoomValue<R = void, P0 = CGRect, P1 = number>(_drawBorderWithRect: P0, _zoomValue: P1): R;
      drawSelectionHandlesForLayer_zoomValue<R = void, P0 = unknown, P1 = number>(_drawSelectionHandlesForLayer: P0, _zoomValue: P1): R;
      drawResizingHandle_ofRect_zoomScale<R = void, P0 = number, P1 = CGRect, P2 = number>(_drawResizingHandle: P0, _ofRect: P1, _zoomScale: P2): R;
      drawHandlesWithRect_zoomScale<R = void, P0 = CGRect, P1 = number>(_drawHandlesWithRect: P0, _zoomScale: P1): R;
      drawFramesForLayers_zoomScale<R = CGRect, P0 = unknown, P1 = number>(_drawFramesForLayers: P0, _zoomScale: P1): R;
      drawSelectionForLayers_zoomScale<R = void, P0 = unknown, P1 = number>(_drawSelectionForLayers: P0, _zoomScale: P1): R;
      drawFramesForLayer_zoomScale<R = void, P0 = unknown, P1 = number>(_drawFramesForLayer: P0, _zoomScale: P1): R;
      drawSelectionForLayer_hideHandles_zoomValue<R = void, P0 = unknown, P1 = boolean, P2 = number>(_drawSelectionForLayer: P0, _hideHandles: P1, _zoomValue: P2): R;
    }
  }
}

declare const MSLayerSelectionDrawing: cocoa.MSLayerSelectionDrawing.CLASS;
