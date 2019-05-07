/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CALayer<T0 = void, T1 = void, T2 = void> {
    // + CALayer(NSBackingLayerContents): 
    NS_backingLayerContentsClass<R = unknown>(): R;
    NS_makeContentsLayer<R = unknown>(): R;
    // + CALayer(NSCanDraw): 
    NS_canDraw<R = boolean>(): R;
    // + CALayer(NSContentsAligning): 
    NS_displayUsingContentsAligning<R = void>(): R;
    NS_willDisplayWithoutContentsAligning<R = void>(): R;
    NS_setNeedsDisplayInRectUsingContentsAligning<R = void, P0 = CGRect>(_NS_setNeedsDisplayInRectUsingContentsAligning: P0): R;
    NS_alignedRect<R = CGRect>(): R;
    NS_alignedDisplayRect<R = CGRect>(): R;
    NS_displayRect<R = CGRect>(): R;
    NS_displayAlignedRect<R = CGRect, P0 = CGRect>(_NS_displayAlignedRect: P0): R;
    NS_displayAlignedRect_options<R = CGRect, P0 = CGRect, P1 = number>(_NS_displayAlignedRect: P0, _options: P1): R;
    NS_convertRectFromDisplay<R = CGRect, P0 = CGRect>(_NS_convertRectFromDisplay: P0): R;
    NS_convertRectToDisplay<R = CGRect, P0 = CGRect>(_NS_convertRectToDisplay: P0): R;
    NS_displayContentsScale<R = number>(): R;
    NS_prepareForDisplayUsingContentsAligning<R = void>(): R;
    NS_updateContentsTransformForContentsAligning<R = void>(): R;
    NS_updateOpaqueForContentsAligning<R = void>(): R;
    // + CALayer(NSDebuggingAddition): 
    _NS_subtreeDescription<R = unknown>(): R;
    _NS_subtreeDescriptionWithIndent<R = unknown, P0 = number>(__NS_subtreeDescriptionWithIndent: P0): R;
    _NS_dumpContents<R = void>(): R;
    // + CALayer(NSDefaultContentsScale): 
    NS_didChangeDefaultContentsScale<R = void, P0 = number>(_NS_didChangeDefaultContentsScale: P0): R;
    // + CALayer(NSSuggestedContentsScale): 
    _NS_invalidateSuggestedContentsScale<R = void>(): R;
    _NS_accumulateSuggestedScaleBelow<R = void, P0 = number>(__NS_accumulateSuggestedScaleBelow: P0): R;
    _NS_accumulateSuggestedScale<R = void, P0 = number>(__NS_accumulateSuggestedScale: P0): R;
    // + CALayer(NSTileLayerAdditions): 
    NS_setPreparedContentRect<R = void, P0 = CGRect>(_NS_setPreparedContentRect: P0): R;
    NS_setPresentationRect<R = void, P0 = CGRect>(_NS_setPresentationRect: P0): R;
    NS_setIsScrolling<R = void, P0 = boolean>(_NS_setIsScrolling: P0): R;
    NS_hasPartialPrefetchedContentsForRect<R = boolean, P0 = CGRect>(_NS_hasPartialPrefetchedContentsForRect: P0): R;
    NS_hasPrefetchedContentsForRect<R = boolean, P0 = CGRect>(_NS_hasPrefetchedContentsForRect: P0): R;
    NS_activeVisibleRect<R = CGRect>(): R;
    NS_prepareContentRect<R = void, P0 = CGRect>(_NS_prepareContentRect: P0): R;
    NS_invalidatePreparedContentRect<R = void>(): R;
    NS_dropPrefetchedContentsIfNecessary<R = void>(): R;
    NS_showPrefetchedContentsIfNecessaryInRect<R = void, P0 = CGRect>(_NS_showPrefetchedContentsIfNecessaryInRect: P0): R;
    NS_wantsToPrefetchTiles<R = boolean>(): R;
    NS_renderedRectInRect_scrollVelocity<R = CGRect, P0 = CGRect, P1 = CGPoint>(_NS_renderedRectInRect: P0, _scrollVelocity: P1): R;
    NS_prefetchContentsInRect_scrollVelocity<R = boolean, P0 = CGRect, P1 = CGPoint>(_NS_prefetchContentsInRect: P0, _scrollVelocity: P1): R;
    NS_hasPrefetchedContents<R = boolean>(): R;
    NS_prefetchContentsIfNecessary<R = void>(): R;
    NS_setPurged<R = void, P0 = boolean>(_NS_setPurged: P0): R;
    NS_isPurged<R = boolean>(): R;
    NS_setVisibleTile<R = void, P0 = boolean>(_NS_setVisibleTile: P0): R;
    NS_isVisibleTile<R = boolean>(): R;
    // + CALayer(NSViewAssociation): 
    _setView<R = void, P0 = unknown>(__setView: P0): R;
    _view<R = unknown>(): R;
    // + CALayer(NSVisualTabPickerCALayerExtras): 
    visualTabPicker_hitTestIgnoringTransformLayers_inRootLayer<R = unknown, P0 = CGPoint, P1 = unknown>(_visualTabPicker_hitTestIgnoringTransformLayers: P0, _inRootLayer: P1): R;
    nearestAncestorIgnoringTransformLayers<R = unknown>(): R;
    // + CALayer(NSContentsAligning):
    NS_shouldUseContentsAligning<R = boolean>(): R;
    NS_contentsAligningEnabled<R = boolean>(): R;
    NS_contentsScaleSizeOrContentsScale<R = CGSize>(): R;
    NS_contentsScaleSize<R = CGSize>(): R;
    setNS_contentsScaleSize<R = void, P0 = CGSize>(_v: P0): R;
    // + CALayer(NSOpenGLInternal):
    NS_managesOpenGLDrawable<R = boolean>(): R;
    // + CALayer(NSSuggestedContentsScale):
    NS_defersTransformInvalidation<R = boolean>(): R;
    setNS_defersTransformInvalidation<R = void, P0 = boolean>(_v: P0): R;
    NS_suggestedContentsScale<R = number>(): R;
    NS_suggestedContentsScaleSize<R = CGSize>(): R;
    // + CALayer(NSViewAssociation):
    NS_view<R = NSView>(): R;
    setNS_view<R = void, P0 = NSView>(_v: P0): R;
    // + CALayer(NSVisibleRect):
    NS_visibleRect<R = CGRect>(): R;
  }
  namespace CALayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + CALayer(_NSTiledLayer): 
      keyPathsForValuesAffectingNS_tiledLayerVisibleRect<R = unknown>(): R;
    }
  }
}

declare const CALayer: cocoa.CALayer.CLASS;
