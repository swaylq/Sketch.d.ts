/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTiledLayer<T0 = void, T1 = void, T2 = void> extends CALayer {
    addSublayer<R = void, P0 = unknown>(_addSublayer: P0): R;
    NS_prepareContentRect<R = void, P0 = CGRect>(_NS_prepareContentRect: P0): R;
    NS_invalidatePreparedContentRect<R = void>(): R;
    NS_hasPartialPrefetchedContentsForRect<R = boolean, P0 = CGRect>(_NS_hasPartialPrefetchedContentsForRect: P0): R;
    NS_hasPrefetchedContentsForRect<R = boolean, P0 = CGRect>(_NS_hasPrefetchedContentsForRect: P0): R;
    NS_renderedRectInRect_scrollVelocity<R = CGRect, P0 = CGRect, P1 = CGPoint>(_NS_renderedRectInRect: P0, _scrollVelocity: P1): R;
    NS_prefetchContentsInRect_scrollVelocity<R = boolean, P0 = CGRect, P1 = CGPoint>(_NS_prefetchContentsInRect: P0, _scrollVelocity: P1): R;
    NS_setPreparedContentRect<R = void, P0 = CGRect>(_NS_setPreparedContentRect: P0): R;
    NS_activeVisibleRect<R = CGRect>(): R;
    NS_showPrefetchedContentsIfNecessaryInRect<R = void, P0 = CGRect>(_NS_showPrefetchedContentsIfNecessaryInRect: P0): R;
    NS_wantsToPrefetchTiles<R = boolean>(): R;
    _purgeExcessTileContents<R = void>(): R;
    drawTile_inContext<R = void, P0 = unknown, P1 = CGContext>(_drawTile: P0, _inContext: P1): R;
    canDrawTile<R = boolean, P0 = unknown>(_canDrawTile: P0): R;
    setContents<R = void, P0 = unknown>(_setContents: P0): R;
    NS_setContentsScaleSize<R = void, P0 = CGSize>(_NS_setContentsScaleSize: P0): R;
    setContentsScale<R = void, P0 = number>(_setContentsScale: P0): R;
    display<R = void>(): R;
    setNeedsDisplayInRect<R = void, P0 = CGRect>(_setNeedsDisplayInRect: P0): R;
    setNeedsLayout<R = void>(): R;
    didChangeValueForKey<R = void, P0 = unknown>(_didChangeValueForKey: P0): R;
    visibleRectDidChange<R = void>(): R;
    layerDidBecomeVisible<R = void, P0 = boolean>(_layerDidBecomeVisible: P0): R;
    NS_contentsAligningEnabled<R = boolean>(): R;
    NS_isScrolling<R = boolean>(): R;
    setBounds<R = void, P0 = CGRect>(_setBounds: P0): R;
    updateTileScrollingInfoLayer<R = void>(): R;
    _updateTileScrollingInfoLayerFrame<R = void>(): R;
    NS_setPresentationRect<R = void, P0 = CGRect>(_NS_setPresentationRect: P0): R;
    NS_setIsScrolling<R = void, P0 = boolean>(_NS_setIsScrolling: P0): R;
    _addAllTilesWithNonPurgedContents<R = void>(): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
    renderInContext<R = void, P0 = CGContext>(_renderInContext: P0): R;
    tileClass<R = unknown>(): R;
    setTileClass<R = void, P0 = unknown>(_v: P0): R;
    prefetchBorder<R = number>(): R;
    setPrefetchBorder<R = void, P0 = number>(_v: P0): R;
    tileSize<R = CGSize>(): R;
    setTileSize<R = void, P0 = CGSize>(_v: P0): R;
  }
  namespace _NSTiledLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CALayer {
      needsDisplayForKey<R = boolean, P0 = unknown>(_needsDisplayForKey: P0): R;
      defaultValueForKey<R = unknown, P0 = unknown>(_defaultValueForKey: P0): R;
      initialize<R = void>(): R;
    }
  }
}
