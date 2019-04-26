/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers26MSTemporaryCoordinateSpace<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    unitCoordinateSpace<R = MSLayerCoordinateSpace>(): R;
    setUnitCoordinateSpace<R = void, P0 = MSLayerCoordinateSpace>(_v: P0): R;
    parentCoordinateSpace<R = MSLayerCoordinateSpace>(): R;
    setParentCoordinateSpace<R = void, P0 = MSLayerCoordinateSpace>(_v: P0): R;
    flippedVertically<R = boolean>(): R;
    setFlippedVertically<R = void, P0 = boolean>(_v: P0): R;
    flippedHorizontally<R = boolean>(): R;
    setFlippedHorizontally<R = void, P0 = boolean>(_v: P0): R;
    rotation<R = number>(): R;
    setRotation<R = void, P0 = number>(_v: P0): R;
    position<R = CGPoint>(): R;
    setPosition<R = void, P0 = CGPoint>(_v: P0): R;
    anchorPoint<R = CGPoint>(): R;
    setAnchorPoint<R = void, P0 = CGPoint>(_v: P0): R;
    bounds<R = CGRect>(): R;
    setBounds<R = void, P0 = CGRect>(_v: P0): R;
    // + _TtC17SketchControllers26MSTemporaryCoordinateSpace(SketchControllers): 
    initWithLayer<R = unknown, P0 = unknown>(_initWithLayer: P0): R;
    // + _TtC17SketchControllers26MSTemporaryCoordinateSpace(SketchControllers1): 
    transformForConvertingFromCoordinateSpace<R = CGAffineTransform, P0 = unknown>(_transformForConvertingFromCoordinateSpace: P0): R;
    transformForConvertingToCoordinateSpace<R = CGAffineTransform, P0 = unknown>(_transformForConvertingToCoordinateSpace: P0): R;
    convertVector_fromCoordinateSpace<R = CGVector, P0 = CGVector, P1 = unknown>(_convertVector: P0, _fromCoordinateSpace: P1): R;
    convertVector_toCoordinateSpace<R = CGVector, P0 = CGVector, P1 = unknown>(_convertVector: P0, _toCoordinateSpace: P1): R;
    convertRect_fromCoordinateSpace<R = CGRect, P0 = CGRect, P1 = unknown>(_convertRect: P0, _fromCoordinateSpace: P1): R;
    convertRect_toCoordinateSpace<R = CGRect, P0 = CGRect, P1 = unknown>(_convertRect: P0, _toCoordinateSpace: P1): R;
    convertPoint_fromCoordinateSpace<R = CGPoint, P0 = CGPoint, P1 = unknown>(_convertPoint: P0, _fromCoordinateSpace: P1): R;
    convertPoint_toCoordinateSpace<R = CGPoint, P0 = CGPoint, P1 = unknown>(_convertPoint: P0, _toCoordinateSpace: P1): R;
    // + _TtC17SketchControllers26MSTemporaryCoordinateSpace(SketchControllers1):
    transformForConvertingFromParentCoordinateSpace<R = CGAffineTransform>(): R;
    transformForConvertingToParentCoordinateSpace<R = CGAffineTransform>(): R;
  }
  namespace _TtC17SketchControllers26MSTemporaryCoordinateSpace {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _TtC17SketchControllers26MSTemporaryCoordinateSpace>(): R;
      new: <R = _TtC17SketchControllers26MSTemporaryCoordinateSpace>() => R;
  
  }
  }
}
