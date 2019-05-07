/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeChangeContext<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    rectOfSelectedPoints<R = CGRect>(): R;
    selectedHandlesSortedByAxis<R = unknown, P0 = number>(_selectedHandlesSortedByAxis: P0): R;
    setLocation_ofHandleAtIndexPath<R = void, P0 = CGPoint, P1 = unknown>(_setLocation: P0, _ofHandleAtIndexPath: P1): R;
    locationOfHandleAtIndexPath_inCoordinateSpace<R = CGPoint, P0 = unknown, P1 = unknown>(_locationOfHandleAtIndexPath: P0, _inCoordinateSpace: P1): R;
    curvePointAtIndexPath<R = unknown, P0 = unknown>(_curvePointAtIndexPath: P0): R;
    enumerateCurvePointsUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateCurvePointsUsingBlock: P0): R;
    initWithLayers_handleIndexPaths<R = unknown, P0 = unknown, P1 = unknown>(_initWithLayers: P0, _handleIndexPaths: P1): R;
    handleIndexPaths<R = NSArray>(): R;
    layers<R = NSArray>(): R;
    orderedHandleIndexPaths<R = NSArray>(): R;
  }
  namespace MSShapeChangeContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = MSShapeChangeContext>(): R;
      new: <R = MSShapeChangeContext>() => R;
    }
  }
}

declare const MSShapeChangeContext: cocoa.MSShapeChangeContext.CLASS;
