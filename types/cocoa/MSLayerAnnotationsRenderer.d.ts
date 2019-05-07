/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerAnnotationsRenderer<T0 = void, T1 = void, T2 = void> extends MSOptionalRenderer {
    renderLayer_ignoreDrawingArea_context<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(_renderLayer: P0, _ignoreDrawingArea: P1, _context: P2): R;
  }
  namespace MSLayerAnnotationsRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOptionalRenderer {
      alloc<R = MSLayerAnnotationsRenderer>(): R;
      new: <R = MSLayerAnnotationsRenderer>() => R;
    }
  }
}

declare const MSLayerAnnotationsRenderer: cocoa.MSLayerAnnotationsRenderer.CLASS;
