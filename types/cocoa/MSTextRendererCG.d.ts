/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextRendererCG<T0 = void, T1 = void, T2 = void> extends MSLayerRendererCG {
    drawTextLayer_onUnderlyingPath_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_drawTextLayer: P0, _onUnderlyingPath: P1, _context: P2): R;
    drawBorder_forLayoutManager_atPoint_context<R = void, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = unknown>(_drawBorder: P0, _forLayoutManager: P1, _atPoint: P2, _context: P3): R;
    drawLayoutManager_style_aPoint_context<R = void, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = unknown>(_drawLayoutManager: P0, _style: P1, _aPoint: P2, _context: P3): R;
    drawTextLayerAsPath_withTextStorage_inBounds_context<R = void, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = unknown>(_drawTextLayerAsPath: P0, _withTextStorage: P1, _inBounds: P2, _context: P3): R;
    drawTextLayerInsideBoundsTransform_context<R = void, P0 = unknown, P1 = unknown>(_drawTextLayerInsideBoundsTransform: P0, _context: P1): R;
    renderLayerWithUnavailableFonts_context<R = boolean, P0 = unknown, P1 = unknown>(_renderLayerWithUnavailableFonts: P0, _context: P1): R;
  }
  namespace MSTextRendererCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayerRendererCG {
      alloc<R = MSTextRendererCG>(): R;
      new: <R = MSTextRendererCG>() => R;
    }
  }
}

declare const MSTextRendererCG: cocoa.MSTextRendererCG.CLASS;
