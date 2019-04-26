/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSnapperData<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    hash<R = number>(): R;
    drawSpacingRect_zoomScale_coordinateSpace<R = void, P0 = CGRect, P1 = number, P2 = unknown>(_drawSpacingRect: P0, _zoomScale: P1, _coordinateSpace: P2): R;
    drawSpacingSnap_zoomScale_coordinateSpace<R = void, P0 = unknown, P1 = number, P2 = unknown>(_drawSpacingSnap: P0, _zoomScale: P1, _coordinateSpace: P2): R;
    drawDimensionSnap_zoomScale<R = void, P0 = unknown, P1 = number>(_drawDimensionSnap: P0, _zoomScale: P1): R;
    drawSnappedDimension_zoomScale<R = void, P0 = unknown, P1 = number>(_drawSnappedDimension: P0, _zoomScale: P1): R;
    drawEdgeSnap_inCoordinateSpace_zoomScale<R = void, P0 = unknown, P1 = unknown, P2 = number>(_drawEdgeSnap: P0, _inCoordinateSpace: P1, _zoomScale: P2): R;
    drawAccumulator_inLayer_zoomScale<R = void, P0 = unknown, P1 = unknown, P2 = number>(_drawAccumulator: P0, _inLayer: P1, _zoomScale: P2): R;
    drawForGroup_zoomScale<R = void, P0 = unknown, P1 = number>(_drawForGroup: P0, _zoomScale: P1): R;
    addSpacingMeasurementsForEdgeSnaps<R = void>(): R;
    resetEdgeSnapsForAxis<R = void, P0 = number>(_resetEdgeSnapsForAxis: P0): R;
    addEdgeSnap<R = void, P0 = unknown>(_addEdgeSnap: P0): R;
    addSpacingSnap<R = void, P0 = unknown>(_addSpacingSnap: P0): R;
    firstSpacingSnapForAxis<R = unknown, P0 = number>(_firstSpacingSnapForAxis: P0): R;
    addDimensionSnap<R = void, P0 = unknown>(_addDimensionSnap: P0): R;
    firstDimensionSnapForAxis<R = unknown, P0 = number>(_firstDimensionSnapForAxis: P0): R;
    accumulatorForAxis<R = unknown, P0 = number>(_accumulatorForAxis: P0): R;
    initWithSnappingSession<R = unknown, P0 = unknown>(_initWithSnappingSession: P0): R;
    drawingHelper<R = MSMeasurementDrawing>(): R;
    setDrawingHelper<R = void, P0 = MSMeasurementDrawing>(_v: P0): R;
    numberFormatter<R = NSNumberFormatter>(): R;
    setNumberFormatter<R = void, P0 = NSNumberFormatter>(_v: P0): R;
    yAxisAccumulator<R = MSSnappingAccumulator>(): R;
    xAxisAccumulator<R = MSSnappingAccumulator>(): R;
    snappingSession<R = MSSnappingSession>(): R;
    spacingAxes<R = number>(): R;
    dimensionAxes<R = number>(): R;
    item<R = MSSnapItem>(): R;
  }
  namespace MSSnapperData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSSnapperData>(): R;
      new: <R = MSSnapperData>() => R;
    }
  }
}

declare const MSSnapperData: cocoa.MSSnapperData.CLASS;
