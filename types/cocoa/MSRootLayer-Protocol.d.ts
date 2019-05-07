/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRootLayerProtocol<T0 = void, T1 = void, T2 = void> extends MSLayerTraitsProtocol {
    rect<R = CGRect>(): R;
    contentBounds<R = CGRect>(): R;
    rulerBase<R = CGPoint>(): R;
    setRulerBase<R = void, P0 = CGPoint>(_v: P0): R;
    verticalRulerData<R = MSRulerData>(): R;
    setVerticalRulerData<R = void, P0 = MSRulerData>(_v: P0): R;
    horizontalRulerData<R = MSRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = MSRulerData>(_v: P0): R;
    layout<R = MSLayoutGrid>(): R;
    setLayout<R = void, P0 = MSLayoutGrid>(_v: P0): R;
    grid<R = MSSimpleGrid>(): R;
    setGrid<R = void, P0 = MSSimpleGrid>(_v: P0): R;
  }
  namespace MSRootLayerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayerTraitsProtocol {}
  }
}
