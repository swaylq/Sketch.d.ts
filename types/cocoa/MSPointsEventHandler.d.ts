/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPointsEventHandler<T0 = void, T1 = void, T2 = void> extends MSEventHandler {
    convertPointToAbsoluteCoordinates<R = CGPoint, P0 = CGPoint>(_convertPointToAbsoluteCoordinates: P0): R;
    snapPoint_toLines<R = CGPoint, P0 = CGPoint, P1 = unknown>(_snapPoint: P0, _toLines: P1): R;
    pointsToSnap<R = unknown>(): R;
    snapTargetsForPoints<R = unknown, P0 = unknown>(_snapTargetsForPoints: P0): R;
    useSnaps<R = boolean>(): R;
    drawHandleAtPoint_index_selected<R = void, P0 = CGPoint, P1 = number, P2 = boolean>(_drawHandleAtPoint: P0, _index: P1, _selected: P2): R;
    drawSnaps<R = void>(): R;
    handleLinesPath<R = unknown>(): R;
    handleLinesColor<R = unknown>(): R;
    drawHandleLines<R = void>(): R;
    shouldReturnToDefaultHandlerInCurrentState<R = boolean>(): R;
    movePointAtIndex_toLocation_modifierFlags<R = void, P0 = number, P1 = CGPoint, P2 = number>(_movePointAtIndex: P0, _toLocation: P1, _modifierFlags: P2): R;
    replacePointAtIndex_withPoint<R = void, P0 = number, P1 = CGPoint>(_replacePointAtIndex: P0, _withPoint: P1): R;
    pointAtIndex<R = CGPoint, P0 = number>(_pointAtIndex: P0): R;
    point_isNearPoint<R = boolean, P0 = CGPoint, P1 = CGPoint>(_point: P0, _isNearPoint: P1): R;
    indexOfPointAtLocation<R = number, P0 = CGPoint>(_indexOfPointAtLocation: P0): R;
    allowsEmptySelection<R = boolean>(): R;
    convertPointToUnitCoordinateSpace<R = CGPoint, P0 = CGPoint>(_convertPointToUnitCoordinateSpace: P0): R;
    sendUpdate<R = void>(): R;
    bounds<R = CGRect>(): R;
    points<R = unknown>(): R;
    findSelectedLayer<R = unknown>(): R;
    indexForSelectedPoint<R = number>(): R;
    setIndexForSelectedPoint<R = void, P0 = number>(_v: P0): R;
    layer<R = MSStyledLayer>(): R;
    setLayer<R = void, P0 = MSStyledLayer>(_v: P0): R;
    coordinateSpace<R = MSLayer>(): R;
  }
  namespace MSPointsEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSEventHandler {
      alloc<R = MSPointsEventHandler>(): R;
      new: <R = MSPointsEventHandler>() => R;
    }
  }
}

declare const MSPointsEventHandler: cocoa.MSPointsEventHandler.CLASS;
