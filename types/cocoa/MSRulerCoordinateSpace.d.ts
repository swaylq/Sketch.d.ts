/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRulerCoordinateSpace<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    transformForConvertingToCoordinateSpace<R = CGAffineTransform, P0 = unknown>(_transformForConvertingToCoordinateSpace: P0): R;
    transformForConvertingFromCoordinateSpace<R = CGAffineTransform, P0 = unknown>(_transformForConvertingFromCoordinateSpace: P0): R;
    convertVector_fromCoordinateSpace<R = CGVector, P0 = CGVector, P1 = unknown>(_convertVector: P0, _fromCoordinateSpace: P1): R;
    convertVector_toCoordinateSpace<R = CGVector, P0 = CGVector, P1 = unknown>(_convertVector: P0, _toCoordinateSpace: P1): R;
    convertRect_fromCoordinateSpace<R = CGRect, P0 = CGRect, P1 = unknown>(_convertRect: P0, _fromCoordinateSpace: P1): R;
    convertRect_toCoordinateSpace<R = CGRect, P0 = CGRect, P1 = unknown>(_convertRect: P0, _toCoordinateSpace: P1): R;
    convertPoint_fromCoordinateSpace<R = CGPoint, P0 = CGPoint, P1 = unknown>(_convertPoint: P0, _fromCoordinateSpace: P1): R;
    convertPoint_toCoordinateSpace<R = CGPoint, P0 = CGPoint, P1 = unknown>(_convertPoint: P0, _toCoordinateSpace: P1): R;
    initWithLayer<R = unknown, P0 = unknown>(_initWithLayer: P0): R;
    layer<R = MSRootLayer>(): R;
    transformForConvertingFromParentCoordinateSpace<R = CGAffineTransform>(): R;
    transformForConvertingToParentCoordinateSpace<R = CGAffineTransform>(): R;
    parentCoordinateSpace<R = MSLayerCoordinateSpace>(): R;
    bounds<R = CGRect>(): R;
  }
  namespace MSRulerCoordinateSpace {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSRulerCoordinateSpace>(): R;
      new: <R = MSRulerCoordinateSpace>() => R;
    }
  }
}

declare const MSRulerCoordinateSpace: cocoa.MSRulerCoordinateSpace.CLASS;
