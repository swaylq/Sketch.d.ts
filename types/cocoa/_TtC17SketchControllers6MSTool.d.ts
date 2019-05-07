/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers6MSTool<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    locationIn<R = CGPoint, P0 = unknown>(_locationIn: P0): R;
    unitCoordinateSpace<R = MSLayerCoordinateSpace>(): R;
    setUnitCoordinateSpace<R = void, P0 = MSLayerCoordinateSpace>(_v: P0): R;
    parentCoordinateSpace<R = MSLayerCoordinateSpace>(): R;
    frame<R = CGRect>(): R;
    bounds<R = CGRect>(): R;
    layers<R = NSArray>(): R;
    // + _TtC17SketchControllers6MSTool(SketchControllers): 
    transformForConvertingFromCoordinateSpace<R = CGAffineTransform, P0 = unknown>(_transformForConvertingFromCoordinateSpace: P0): R;
    transformForConvertingToCoordinateSpace<R = CGAffineTransform, P0 = unknown>(_transformForConvertingToCoordinateSpace: P0): R;
    convertVector_fromCoordinateSpace<R = CGVector, P0 = CGVector, P1 = unknown>(_convertVector: P0, _fromCoordinateSpace: P1): R;
    convertVector_toCoordinateSpace<R = CGVector, P0 = CGVector, P1 = unknown>(_convertVector: P0, _toCoordinateSpace: P1): R;
    convertRect_fromCoordinateSpace<R = CGRect, P0 = CGRect, P1 = unknown>(_convertRect: P0, _fromCoordinateSpace: P1): R;
    convertRect_toCoordinateSpace<R = CGRect, P0 = CGRect, P1 = unknown>(_convertRect: P0, _toCoordinateSpace: P1): R;
    convertPoint_fromCoordinateSpace<R = CGPoint, P0 = CGPoint, P1 = unknown>(_convertPoint: P0, _fromCoordinateSpace: P1): R;
    convertPoint_toCoordinateSpace<R = CGPoint, P0 = CGPoint, P1 = unknown>(_convertPoint: P0, _toCoordinateSpace: P1): R;
    // + _TtC17SketchControllers6MSTool(SketchControllers1): 
    alignmentRectInCoordinateSpace_options<R = CGRect, P0 = unknown, P1 = number>(_alignmentRectInCoordinateSpace: P0, _options: P1): R;
    shouldDrawDistanceOnSnapTo<R = boolean, P0 = unknown>(_shouldDrawDistanceOnSnapTo: P0): R;
    // + _TtC17SketchControllers6MSTool(SketchControllers):
    transformForConvertingFromParentCoordinateSpace<R = CGAffineTransform>(): R;
    transformForConvertingToParentCoordinateSpace<R = CGAffineTransform>(): R;
    // + _TtC17SketchControllers6MSTool(SketchControllers1):
    snapItemForDrawing<R = MSSnappable>(): R;
    coordinateSpace<R = MSLayerCoordinateSpace>(): R;
  }
  namespace _TtC17SketchControllers6MSTool {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _TtC17SketchControllers6MSTool>(): R;
      new: <R = _TtC17SketchControllers6MSTool>() => R;
  
  }
  }
}
