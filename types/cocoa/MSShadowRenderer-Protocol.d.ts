/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShadowRendererProtocol<T0 = void, T1 = void, T2 = void> extends MSRendererProtocol {
    renderInnerShadow_path_windingRule_context_cacheObject<R = void, P0 = MSImmutableStyleInnerShadow, P1 = MSPath, P2 = number, P3 = MSRenderingContext, P4 = MSModelObject>(_renderInnerShadow: P0, _path: P1, _windingRule: P2, _context: P3, _cacheObject: P4): R;
    renderShadow_rect_context_block<R = void, P0 = MSImmutableStyleShadow, P1 = CGRect, P2 = MSRenderingContext, P3 = CDUnknownBlockType>(_renderShadow: P0, _rect: P1, _context: P2, _block: P3): R;
    renderShadow_path_cacheObject_windingRule_options_type_strokeType_fillShouldClip_lineWidth_context<R = void, P0 = MSImmutableStyleShadow, P1 = MSPath, P2 = MSModelObject, P3 = number, P4 = MSImmutableStyleBorderOptions, P5 = number, P6 = number, P7 = boolean, P8 = number, P9 = MSRenderingContext>(_renderShadow: P0, _path: P1, _cacheObject: P2, _windingRule: P3, _options: P4, _type: P5, _strokeType: P6, _fillShouldClip: P7, _lineWidth: P8, _context: P9): R;
  }
  namespace MSShadowRendererProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSRendererProtocol {}
  }
}
