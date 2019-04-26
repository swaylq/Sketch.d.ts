/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerMeasurementRenderer<T0 = void, T1 = void, T2 = void> extends MSOverlayRenderer {
    isMeasuringDistance<R = boolean>(): R;
    clear<R = void>(): R;
    drawDistanceFromRect_toLargerRect_zoomScale<R = void, P0 = CGRect, P1 = CGRect, P2 = number>(_drawDistanceFromRect: P0, _toLargerRect: P1, _zoomScale: P2): R;
    drawDashLinesBetweenRect_andRect_zoomScale<R = void, P0 = CGRect, P1 = CGRect, P2 = number>(_drawDashLinesBetweenRect: P0, _andRect: P1, _zoomScale: P2): R;
    drawDistanceFromRect_toRect_zoomScale<R = void, P0 = CGRect, P1 = CGRect, P2 = number>(_drawDistanceFromRect: P0, _toRect: P1, _zoomScale: P2): R;
    drawDistanceFromRect_toGuides_zoomScale<R = void, P0 = CGRect, P1 = unknown, P2 = number>(_drawDistanceFromRect: P0, _toGuides: P1, _zoomScale: P2): R;
    prepareForGeometryChange<R = void>(): R;
    rectForPositionDrawingForLayers<R = CGRect, P0 = unknown>(_rectForPositionDrawingForLayers: P0): R;
    drawVerticalDistanceBetweenRect_andRect_zoomScale<R = void, P0 = CGRect, P1 = CGRect, P2 = number>(_drawVerticalDistanceBetweenRect: P0, _andRect: P1, _zoomScale: P2): R;
    drawHorizontalDistanceBetweenRect_andRect_zoomScale<R = void, P0 = CGRect, P1 = CGRect, P2 = number>(_drawHorizontalDistanceBetweenRect: P0, _andRect: P1, _zoomScale: P2): R;
    drawMeasurement_ofRect_zoomScale<R = void, P0 = number, P1 = CGRect, P2 = number>(_drawMeasurement: P0, _ofRect: P1, _zoomScale: P2): R;
    drawOutlineForRect_zoomScale<R = void, P0 = CGRect, P1 = number>(_drawOutlineForRect: P0, _zoomScale: P1): R;
    drawingRectForData<R = CGRect, P0 = unknown>(_drawingRectForData: P0): R;
    measurementData<R = unknown>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    measurementStamp<R = MSMeasurementDrawing>(): R;
    setMeasurementStamp<R = void, P0 = MSMeasurementDrawing>(_v: P0): R;
    numberFormatter<R = NSNumberFormatter>(): R;
    setNumberFormatter<R = void, P0 = NSNumberFormatter>(_v: P0): R;
    measurementOptions<R = number>(): R;
    setMeasurementOptions<R = void, P0 = number>(_v: P0): R;
    measurementTarget<R = MSLayerMeasurementTarget>(): R;
    setMeasurementTarget<R = void, P0 = MSLayerMeasurementTarget>(_v: P0): R;
    selectedLayers<R = MSLayerArray>(): R;
    setSelectedLayers<R = void, P0 = MSLayerArray>(_v: P0): R;
  }
  namespace MSLayerMeasurementRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverlayRenderer {
      alloc<R = MSLayerMeasurementRenderer>(): R;
      new: <R = MSLayerMeasurementRenderer>() => R;
    }
  }
}

declare const MSLayerMeasurementRenderer: cocoa.MSLayerMeasurementRenderer.CLASS;
