/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerSelectionDrawing<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSLayerSelectionDrawing {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLayerSelectionDrawing>(): R;
      new: <R = MSLayerSelectionDrawing>() => R;
      strokeWidthForZoomValue<R = number, P0 = number>(_strokeWidthForZoomValue: P0): R;
      drawSelectionHandlesForLayer_zoomValue<R = void, P0 = unknown, P1 = number>(_drawSelectionHandlesForLayer: P0, _zoomValue: P1): R;
      drawSelectionStrokeForLayer_zoomValue<R = void, P0 = unknown, P1 = number>(_drawSelectionStrokeForLayer: P0, _zoomValue: P1): R;
      drawSelectionForLayer_zoomValue<R = void, P0 = unknown, P1 = number>(_drawSelectionForLayer: P0, _zoomValue: P1): R;
    }
  }
}

declare const MSLayerSelectionDrawing: cocoa.MSLayerSelectionDrawing.CLASS;
