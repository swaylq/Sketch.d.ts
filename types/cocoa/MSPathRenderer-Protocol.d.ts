/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPathRendererProtocol<T0 = void, T1 = void, T2 = void> extends MSRendererProtocol {
    renderBordersForPath_style_applyClip_rect_context<R = void, P0 = MSPath, P1 = MSImmutableStyle, P2 = boolean, P3 = CGRect, P4 = MSRenderingContext>(_renderBordersForPath: P0, _style: P1, _applyClip: P2, _rect: P3, _context: P4): R;
    renderFillsForPath_style_layer_rect_context<R = void, P0 = MSPath, P1 = MSImmutableStyle, P2 = MSImmutableStyledLayer, P3 = CGRect, P4 = MSRenderingContext>(_renderFillsForPath: P0, _style: P1, _layer: P2, _rect: P3, _context: P4): R;
    renderPath_style_layer_inRect_fallbackColor_context<R = void, P0 = MSPath, P1 = MSImmutableStyle, P2 = MSImmutableStyledLayer, P3 = CGRect, P4 = CGColor, P5 = MSRenderingContext>(_renderPath: P0, _style: P1, _layer: P2, _inRect: P3, _fallbackColor: P4, _context: P5): R;
  }
  namespace MSPathRendererProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSRendererProtocol {}
  }
}
