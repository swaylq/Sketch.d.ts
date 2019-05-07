/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWebExportableRootLayerProtocol<T0 = void, T1 = void, T2 = void> extends MSImmutableRootLayerProtocol {
    rectInFixedViewportWithRect_fromFixingLayer<R = CGRect, P0 = CGRect, P1 = MSImmutableLayer>(_rectInFixedViewportWithRect: P0, _fromFixingLayer: P1): R;
    webExportLayerBehaviorWithRect_fromLayer<R = number, P0 = CGRect, P1 = MSImmutableLayer>(_webExportLayerBehaviorWithRect: P0, _fromLayer: P1): R;
    containsFixedLayers<R = boolean>(): R;
    preset<R = MSArtboardPreset>(): R;
    isFlowHome<R = boolean>(): R;
    webExporterShouldIncludeBackgroundColor<R = boolean>(): R;
    webExporterBackgoundColor<R = MSImmutableColor>(): R;
  }
  namespace MSWebExportableRootLayerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableRootLayerProtocol {}
  }
}
