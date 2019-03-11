/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CALayer<T = any> {
    // + CALayer(NSBackingLayerContents,NSCanDraw,NSContentsAligning,NSDebuggingAddition,NSDefaultContentsScale,NSOpenGLInternal,NSSuggestedContentsScale,NSTileLayerAdditions,NSViewAssociation,NSVisibleRect,NSVisualTabPickerCALayerExtras,_NSTiledLayer):
    NS_backingLayerContentsClass<R = unknown>(): R;
    NS_makeContentsLayer<R = unknown>(): R;
    NS_canDraw<R = boolean>(): R;
    NS_displayUsingContentsAligning<R = void>(): R;
    NS_willDisplayWithoutContentsAligning<R = void>(): R;
    NS_setNeedsDisplayInRectUsingContentsAligning<R = void, P0 = cocoa.CGRect>(_NS_setNeedsDisplayInRectUsingContentsAligning: P0): R;
    NS_alignedRect<R = cocoa.CGRect>(): R;
    NS_alignedDisplayRect<R = cocoa.CGRect>(): R;
    NS_displayRect<R = cocoa.CGRect>(): R;
    NS_displayAlignedRect<R = cocoa.CGRect, P0 = cocoa.CGRect>(_NS_displayAlignedRect: P0): R;
    NS_displayAlignedRect_options<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(_NS_displayAlignedRect: P0, _options: P1): R;
    NS_convertRectFromDisplay<R = cocoa.CGRect, P0 = cocoa.CGRect>(_NS_convertRectFromDisplay: P0): R;
    NS_convertRectToDisplay<R = cocoa.CGRect, P0 = cocoa.CGRect>(_NS_convertRectToDisplay: P0): R;
    NS_displayContentsScale<R = number>(): R;
    NS_prepareForDisplayUsingContentsAligning<R = void>(): R;
    NS_updateContentsTransformForContentsAligning<R = void>(): R;
    NS_updateOpaqueForContentsAligning<R = void>(): R;
    _NS_subtreeDescription<R = unknown>(): R;
    _NS_subtreeDescriptionWithIndent<R = unknown, P0 = number>(__NS_subtreeDescriptionWithIndent: P0): R;
    _NS_dumpContents<R = void>(): R;
    NS_didChangeDefaultContentsScale<R = void, P0 = number>(_NS_didChangeDefaultContentsScale: P0): R;
    _NS_invalidateSuggestedContentsScale<R = void>(): R;
    _NS_accumulateSuggestedScaleBelow<R = void, P0 = number>(__NS_accumulateSuggestedScaleBelow: P0): R;
    _NS_accumulateSuggestedScale<R = void, P0 = number>(__NS_accumulateSuggestedScale: P0): R;
    NS_setPreparedContentRect<R = void, P0 = cocoa.CGRect>(_NS_setPreparedContentRect: P0): R;
    NS_setPresentationRect<R = void, P0 = cocoa.CGRect>(_NS_setPresentationRect: P0): R;
    NS_setIsScrolling<R = void, P0 = boolean>(_NS_setIsScrolling: P0): R;
    NS_hasPartialPrefetchedContentsForRect<R = boolean, P0 = cocoa.CGRect>(_NS_hasPartialPrefetchedContentsForRect: P0): R;
    NS_hasPrefetchedContentsForRect<R = boolean, P0 = cocoa.CGRect>(_NS_hasPrefetchedContentsForRect: P0): R;
    NS_activeVisibleRect<R = cocoa.CGRect>(): R;
    NS_prepareContentRect<R = void, P0 = cocoa.CGRect>(_NS_prepareContentRect: P0): R;
    NS_invalidatePreparedContentRect<R = void>(): R;
    NS_dropPrefetchedContentsIfNecessary<R = void>(): R;
    NS_showPrefetchedContentsIfNecessaryInRect<R = void, P0 = cocoa.CGRect>(_NS_showPrefetchedContentsIfNecessaryInRect: P0): R;
    NS_wantsToPrefetchTiles<R = boolean>(): R;
    NS_renderedRectInRect_scrollVelocity<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = cocoa.CGPoint>(_NS_renderedRectInRect: P0, _scrollVelocity: P1): R;
    NS_prefetchContentsInRect_scrollVelocity<R = boolean, P0 = cocoa.CGRect, P1 = cocoa.CGPoint>(_NS_prefetchContentsInRect: P0, _scrollVelocity: P1): R;
    NS_hasPrefetchedContents<R = boolean>(): R;
    NS_prefetchContentsIfNecessary<R = void>(): R;
    NS_setPurged<R = void, P0 = boolean>(_NS_setPurged: P0): R;
    NS_isPurged<R = boolean>(): R;
    NS_setVisibleTile<R = void, P0 = boolean>(_NS_setVisibleTile: P0): R;
    NS_isVisibleTile<R = boolean>(): R;
    _setView<R = void, P0 = unknown>(__setView: P0): R;
    _view<R = unknown>(): R;
    visualTabPicker_hitTestIgnoringTransformLayers_inRootLayer<R = unknown, P0 = cocoa.CGPoint, P1 = unknown>(_visualTabPicker_hitTestIgnoringTransformLayers: P0, _inRootLayer: P1): R;
    nearestAncestorIgnoringTransformLayers<R = unknown>(): R;
    NS_shouldUseContentsAligning<R = boolean>(): R;
    NS_contentsAligningEnabled<R = boolean>(): R;
    NS_contentsScaleSizeOrContentsScale<R = cocoa.CGSize>(): R;
    NS_contentsScaleSize<R = cocoa.CGSize>(): R;
    setNS_contentsScaleSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    NS_managesOpenGLDrawable<R = boolean>(): R;
    NS_defersTransformInvalidation<R = boolean>(): R;
    setNS_defersTransformInvalidation<R = void, P0 = boolean>(_v: P0): R;
    NS_suggestedContentsScale<R = number>(): R;
    NS_suggestedContentsScaleSize<R = cocoa.CGSize>(): R;
    NS_view<R = cocoa.NSView>(): R;
    setNS_view<R = void, P0 = cocoa.NSView>(_v: P0): R;
    NS_visibleRect<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface CALayer<T = any> {
      // + CALayer(NSBackingLayerContents,NSCanDraw,NSContentsAligning,NSDebuggingAddition,NSDefaultContentsScale,NSOpenGLInternal,NSSuggestedContentsScale,NSTileLayerAdditions,NSViewAssociation,NSVisibleRect,NSVisualTabPickerCALayerExtras,_NSTiledLayer):
      keyPathsForValuesAffectingNS_tiledLayerVisibleRect<R = unknown>(): R;
    }
  }
}

declare const CALayer: cocoa.classes.CALayer;
