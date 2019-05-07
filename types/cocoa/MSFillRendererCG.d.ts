/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFillRendererCG<T0 = void, T1 = void, T2 = void> extends NSObject, MSFillRendererProtocol {
    drawPatternImageFill_rect_parentLayerOpacity_context<R = void, P0 = unknown, P1 = CGRect, P2 = number, P3 = unknown>(_drawPatternImageFill: P0, _rect: P1, _parentLayerOpacity: P2, _context: P3): R;
    drawPatternTiledImageFill_path_winding_rect_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = CGRect, P4 = unknown>(_drawPatternTiledImageFill: P0, _path: P1, _winding: P2, _rect: P3, _context: P4): R;
    drawPatternFill_path_layer_rect_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CGRect, P4 = unknown>(_drawPatternFill: P0, _path: P1, _layer: P2, _rect: P3, _context: P4): R;
    drawGradientFill_path_layer_hasInnerStroke_rect_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = CGRect, P5 = unknown>(_drawGradientFill: P0, _path: P1, _layer: P2, _hasInnerStroke: P3, _rect: P4, _context: P5): R;
    drawColorFill_path_index_hasInnerStroke_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = boolean, P4 = unknown>(_drawColorFill: P0, _path: P1, _index: P2, _hasInnerStroke: P3, _context: P4): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSFillRendererCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSFillRendererProtocol {
      alloc<R = MSFillRendererCG>(): R;
      new: <R = MSFillRendererCG>() => R;
    }
  }
}

declare const MSFillRendererCG: cocoa.MSFillRendererCG.CLASS;
