/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverlayRenderingDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    flowItems<R = NSSet, P0 = number>(_flowItems: P0): R;
    renderOverlayInRect_context_pageOverlayRenderOptions<R = void, P0 = CGRect, P1 = CGContext, P2 = number>(_renderOverlayInRect: P0, _context: P1, _pageOverlayRenderOptions: P2): R;
  }
  namespace MSOverlayRenderingDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
