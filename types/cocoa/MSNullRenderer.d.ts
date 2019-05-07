/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNullRenderer<T0 = void, T1 = void, T2 = void> extends NSObject, MSAllRenderersProtocol {
    renderOverlayForPage_selectedLayers_selectedArtboard_options_rect_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = CGRect, P5 = unknown>(_renderOverlayForPage: P0, _selectedLayers: P1, _selectedArtboard: P2, _options: P3, _rect: P4, _context: P5): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSNullRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSAllRenderersProtocol {
      alloc<R = MSNullRenderer>(): R;
      new: <R = MSNullRenderer>() => R;
    }
  }
}

declare const MSNullRenderer: cocoa.MSNullRenderer.CLASS;
