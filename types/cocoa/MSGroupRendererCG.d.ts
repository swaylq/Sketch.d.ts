/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGroupRendererCG<T0 = void, T1 = void, T2 = void> extends MSLayerRendererCG {
    endMaskWithContext_oldAlpha<R = void, P0 = unknown, P1 = number>(_endMaskWithContext: P0, _oldAlpha: P1): R;
    maskImageForShape_context_scale<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_maskImageForShape: P0, _context: P1, _scale: P2): R;
    beginAlphaMask_context<R = void, P0 = unknown, P1 = unknown>(_beginAlphaMask: P0, _context: P1): R;
    beginMask_context<R = number, P0 = unknown, P1 = unknown>(_beginMask: P0, _context: P1): R;
    renderSubLayer_skipFills_ignoreDrawingArea_maskShapeGroup_context<R = void, P0 = unknown, P1 = boolean, P2 = boolean, P3 = unknown, P4 = unknown>(_renderSubLayer: P0, _skipFills: P1, _ignoreDrawingArea: P2, _maskShapeGroup: P3, _context: P4): R;
    renderSubLayersOfGroup_ignoreDrawingArea_context<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(_renderSubLayersOfGroup: P0, _ignoreDrawingArea: P1, _context: P2): R;
  }
  namespace MSGroupRendererCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayerRendererCG {
      alloc<R = MSGroupRendererCG>(): R;
      new: <R = MSGroupRendererCG>() => R;
    }
  }
}

declare const MSGroupRendererCG: cocoa.MSGroupRendererCG.CLASS;
