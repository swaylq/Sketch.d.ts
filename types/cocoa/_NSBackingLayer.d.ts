/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBackingLayer<T0 = void, T1 = void, T2 = void> extends CALayer {
    setObservationInfo<R = void, P0 = void>(_setObservationInfo: P0): R;
    observationInfo<R = void>(): R;
    NS_setPreparedContentRect<R = void, P0 = CGRect>(_NS_setPreparedContentRect: P0): R;
    NS_setPresentationRect<R = void, P0 = CGRect>(_NS_setPresentationRect: P0): R;
    NS_setIsScrolling<R = void, P0 = boolean>(_NS_setIsScrolling: P0): R;
    NS_hasPartialPrefetchedContentsForRect<R = boolean, P0 = CGRect>(_NS_hasPartialPrefetchedContentsForRect: P0): R;
    NS_hasPrefetchedContentsForRect<R = boolean, P0 = CGRect>(_NS_hasPrefetchedContentsForRect: P0): R;
    NS_activeVisibleRect<R = CGRect>(): R;
    NS_renderedRectInRect_scrollVelocity<R = CGRect, P0 = CGRect, P1 = CGPoint>(_NS_renderedRectInRect: P0, _scrollVelocity: P1): R;
    NS_prefetchContentsInRect_scrollVelocity<R = boolean, P0 = CGRect, P1 = CGPoint>(_NS_prefetchContentsInRect: P0, _scrollVelocity: P1): R;
    NS_setContentsScaleSize<R = void, P0 = CGSize>(_NS_setContentsScaleSize: P0): R;
    setContentsScale<R = void, P0 = number>(_setContentsScale: P0): R;
    NS_showPrefetchedContentsIfNecessaryInRect<R = void, P0 = CGRect>(_NS_showPrefetchedContentsIfNecessaryInRect: P0): R;
    NS_wantsToPrefetchTiles<R = boolean>(): R;
    NS_makeContentsLayer<R = unknown>(): R;
    setContents<R = void, P0 = unknown>(_setContents: P0): R;
    display<R = void>(): R;
    displayIfNeeded<R = void>(): R;
    setNeedsDisplayInRect<R = void, P0 = CGRect>(_setNeedsDisplayInRect: P0): R;
    layoutSublayers<R = void>(): R;
    didChangeValueForKey<R = void, P0 = unknown>(_didChangeValueForKey: P0): R;
    init<R = unknown>(): R;
  }
  namespace _NSBackingLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CALayer {
      initialize<R = void>(): R;
    }
  }
}
