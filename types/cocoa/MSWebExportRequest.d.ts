/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWebExportRequest<T0 = void, T1 = void, T2 = void> extends MSExportRequest {
    includedLayerIDs<R = unknown>(): R;
    includedLayerIDsFromLayer_ancestors<R = unknown, P0 = unknown, P1 = unknown>(_includedLayerIDsFromLayer: P0, _ancestors: P1): R;
    layerBehavior<R = number>(): R;
    setLayerBehavior<R = void, P0 = number>(_v: P0): R;
    rootLayer<R = MSWebExportableRootLayer>(): R;
    setRootLayer<R = void, P0 = MSWebExportableRootLayer>(_v: P0): R;
  }
  namespace MSWebExportRequest {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSExportRequest {
      alloc<R = MSWebExportRequest>(): R;
      new: <R = MSWebExportRequest>() => R;
      webExportRequestForRootLayer_inDocument_atScale<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_webExportRequestForRootLayer: P0, _inDocument: P1, _atScale: P2): R;
    }
  }
}

declare const MSWebExportRequest: cocoa.MSWebExportRequest.CLASS;
