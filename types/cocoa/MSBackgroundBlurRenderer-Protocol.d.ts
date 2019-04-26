/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackgroundBlurRendererProtocol<T0 = void, T1 = void, T2 = void> extends MSRendererProtocol {
    renderBackgroundBlurBehindLayer_context_clippedToPath<R = void, P0 = MSImmutableStyledLayer, P1 = MSRenderingContext, P2 = MSPath>(_renderBackgroundBlurBehindLayer: P0, _context: P1, _clippedToPath: P2): R;
  }
  namespace MSBackgroundBlurRendererProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSRendererProtocol {}
  }
}
