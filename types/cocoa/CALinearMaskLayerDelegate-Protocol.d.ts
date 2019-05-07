/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CALinearMaskLayerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends CALayerDelegateProtocol {
    drawLayer_inLinearMaskContext<R = void, P0 = CALayer, P1 = CALinearMaskContext>(_drawLayer: P0, _inLinearMaskContext: P1): R;
  }
  namespace CALinearMaskLayerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CALayerDelegateProtocol {}
  }
}
