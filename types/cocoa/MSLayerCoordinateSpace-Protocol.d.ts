/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerCoordinateSpaceProtocol<T0 = void, T1 = void, T2 = void> {
    transformForConvertingFromCoordinateSpace<R = CGAffineTransform, P0 = MSLayerCoordinateSpace>(_transformForConvertingFromCoordinateSpace: P0): R;
    transformForConvertingToCoordinateSpace<R = CGAffineTransform, P0 = MSLayerCoordinateSpace>(_transformForConvertingToCoordinateSpace: P0): R;
    convertVector_fromCoordinateSpace<R = CGVector, P0 = CGVector, P1 = MSLayerCoordinateSpace>(_convertVector: P0, _fromCoordinateSpace: P1): R;
    convertVector_toCoordinateSpace<R = CGVector, P0 = CGVector, P1 = MSLayerCoordinateSpace>(_convertVector: P0, _toCoordinateSpace: P1): R;
    convertRect_fromCoordinateSpace<R = CGRect, P0 = CGRect, P1 = MSLayerCoordinateSpace>(_convertRect: P0, _fromCoordinateSpace: P1): R;
    convertRect_toCoordinateSpace<R = CGRect, P0 = CGRect, P1 = MSLayerCoordinateSpace>(_convertRect: P0, _toCoordinateSpace: P1): R;
    convertPoint_fromCoordinateSpace<R = CGPoint, P0 = CGPoint, P1 = MSLayerCoordinateSpace>(_convertPoint: P0, _fromCoordinateSpace: P1): R;
    convertPoint_toCoordinateSpace<R = CGPoint, P0 = CGPoint, P1 = MSLayerCoordinateSpace>(_convertPoint: P0, _toCoordinateSpace: P1): R;
    transformForConvertingFromParentCoordinateSpace<R = CGAffineTransform>(): R;
    transformForConvertingToParentCoordinateSpace<R = CGAffineTransform>(): R;
    parentCoordinateSpace<R = MSLayerCoordinateSpace>(): R;
    bounds<R = CGRect>(): R;
  }
  namespace MSLayerCoordinateSpaceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
