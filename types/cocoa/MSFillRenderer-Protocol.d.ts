/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFillRendererProtocol<T0 = void, T1 = void, T2 = void> extends MSRendererProtocol {
    renderFill_path_layer_index_rect_hasInnerStroke_context<R = void, P0 = MSImmutableStyleFill, P1 = MSPath, P2 = MSImmutableStyledLayer, P3 = number, P4 = CGRect, P5 = boolean, P6 = MSRenderingContext>(_renderFill: P0, _path: P1, _layer: P2, _index: P3, _rect: P4, _hasInnerStroke: P5, _context: P6): R;
  }
  namespace MSFillRendererProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSRendererProtocol {}
  }
}
