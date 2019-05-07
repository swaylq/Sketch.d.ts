/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHoverableItemProtocol<T0 = void, T1 = void, T2 = void> {
    refreshOverlay<R = void>(): R;
    canBeHoveredOnPage<R = boolean, P0 = MSPage>(_canBeHoveredOnPage: P0): R;
    drawHoverWithZoom_color_cache<R = void, P0 = number, P1 = NSColor, P2 = BCCache>(_drawHoverWithZoom: P0, _color: P1, _cache: P2): R;
    hoveredLayer<R = MSLayer>(): R;
  }
  namespace MSHoverableItemProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
