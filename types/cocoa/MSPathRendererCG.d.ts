/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPathRendererCG<T0 = void, T1 = void, T2 = void> extends NSObject, MSPathRendererProtocol {
    drawInnerShadowsForPath_style_layer_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_drawInnerShadowsForPath: P0, _style: P1, _layer: P2, _context: P3): R;
    shadowFillShouldClipForStyle<R = boolean, P0 = unknown>(_shadowFillShouldClipForStyle: P0): R;
    drawShadowsForPath_style_layer_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_drawShadowsForPath: P0, _style: P1, _layer: P2, _context: P3): R;
    clipFillsWithPath_style_layer_context_block<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType>(_clipFillsWithPath: P0, _style: P1, _layer: P2, _context: P3, _block: P4): R;
    drawFillForPath_style_layer_fallbackColor_rect_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CGColor, P4 = CGRect, P5 = unknown>(_drawFillForPath: P0, _style: P1, _layer: P2, _fallbackColor: P3, _rect: P4, _context: P5): R;
    shouldAdvanceClipToAvoidOuterStrokeStrokeBleedForStyle<R = boolean, P0 = unknown>(_shouldAdvanceClipToAvoidOuterStrokeStrokeBleedForStyle: P0): R;
    shouldAdvanceClipToAvoidInnerStrokeBleedForStyle_layer<R = boolean, P0 = unknown, P1 = unknown>(_shouldAdvanceClipToAvoidInnerStrokeBleedForStyle: P0, _layer: P1): R;
    clipPathForOuterStrokeForStyle_path_layer_context<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_clipPathForOuterStrokeForStyle: P0, _path: P1, _layer: P2, _context: P3): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPathRendererCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSPathRendererProtocol {
      alloc<R = MSPathRendererCG>(): R;
      new: <R = MSPathRendererCG>() => R;
    }
  }
}

declare const MSPathRendererCG: cocoa.MSPathRendererCG.CLASS;
