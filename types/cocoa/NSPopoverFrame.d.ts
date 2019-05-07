/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverFrame<T0 = void, T1 = void, T2 = void> extends NSVisualEffectView {
    _verticalRangesForAreasOfInterest<R = unknown>(): R;
    setRangeOfInterest_sourceRange<R = void, P0 = unknown, P1 = unknown>(_setRangeOfInterest: P0, _sourceRange: P1): R;
    _closeButtonPressed<R = void, P0 = unknown>(__closeButtonPressed: P0): R;
    _hasTitlebar<R = boolean>(): R;
    titlebarRect<R = CGRect>(): R;
    _markAnchorRectAsNeedingDisplay<R = void>(): R;
    _isBorderView<R = boolean>(): R;
    _drawFrameShadowAndFlushContext<R = void, P0 = unknown>(__drawFrameShadowAndFlushContext: P0): R;
    tileAndSetWindowShape_updateContentView<R = void, P0 = boolean, P1 = boolean>(_tileAndSetWindowShape: P0, _updateContentView: P1): R;
    tileAndSetWindowShape<R = void, P0 = boolean>(_tileAndSetWindowShape: P0): R;
    shapeWindow<R = void>(): R;
    _setFrameNeedsDisplay<R = void, P0 = boolean>(__setFrameNeedsDisplay: P0): R;
    opaqueAncestor<R = unknown>(): R;
    isOpaque<R = boolean>(): R;
    dragRectForFrameRect<R = CGRect, P0 = CGRect>(_dragRectForFrameRect: P0): R;
    _distanceFromToolbarBaseToTitlebar<R = number>(): R;
    _hideToolbarWithAnimation<R = void, P0 = boolean>(__hideToolbarWithAnimation: P0): R;
    _showToolbarWithAnimation<R = void, P0 = boolean>(__showToolbarWithAnimation: P0): R;
    _toolbarIsManagedByExternalWindow<R = boolean>(): R;
    _toolbarIsHidden<R = boolean>(): R;
    _toolbarIsShown<R = boolean>(): R;
    _toolbarIsInTransition<R = boolean>(): R;
    _canHaveToolbar<R = boolean>(): R;
    zoomButton<R = unknown>(): R;
    minimizeButton<R = unknown>(): R;
    closeButton<R = unknown>(): R;
    styleMask<R = number>(): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    title<R = unknown>(): R;
    _drawFrameMaskInRect<R = void, P0 = CGRect>(__drawFrameMaskInRect: P0): R;
    _clearFrameMask<R = void>(): R;
    _frameMask<R = unknown>(): R;
    _createWindowShapeMask_centerRect_scale<R = boolean, P0 = CGImage, P1 = CGRect, P2 = number>(__createWindowShapeMask: P0, _centerRect: P1, _scale: P2): R;
    _cuiOptionsForCornerMaskForWindowType<R = unknown, P0 = __CFString>(__cuiOptionsForCornerMaskForWindowType: P0): R;
    _updatePopoverCornerMaskOnLayer<R = void, P0 = unknown>(__updatePopoverCornerMaskOnLayer: P0): R;
    _adjustedForBoundsAnchorPoint_anchorEdge<R = CGPoint, P0 = CGPoint, P1 = number>(__adjustedForBoundsAnchorPoint: P0, _anchorEdge: P1): R;
    _popoverIfAvailable<R = unknown>(): R;
    drawBackgroundInRect_ofView_anchorEdge_anchorPoint<R = void, P0 = CGRect, P1 = unknown, P2 = number, P3 = CGPoint>(_drawBackgroundInRect: P0, _ofView: P1, _anchorEdge: P2, _anchorPoint: P3): R;
    _coreUIOptionsWithAnchorEdge_anchorPoint_anchorSize_shouldInsetForAnchor_areasOfInterest<R = unknown, P0 = number, P1 = CGPoint, P2 = CGSize, P3 = boolean, P4 = unknown>(__coreUIOptionsWithAnchorEdge: P0, _anchorPoint: P1, _anchorSize: P2, _shouldInsetForAnchor: P3, _areasOfInterest: P4): R;
    _cui_alignmentRectInsets<R = NSEdgeInsets>(): R;
    _cui_optionsForCurrentState<R = unknown>(): R;
    _isBackdropCompatible<R = boolean>(): R;
    _newMinimalAppearancePathInBounds_anchorEdge_anchorPoint_topCapOnly_arrowOffset<R = CGPath, P0 = CGRect, P1 = number, P2 = CGPoint, P3 = boolean, P4 = number>(__newMinimalAppearancePathInBounds: P0, _anchorEdge: P1, _anchorPoint: P2, _topCapOnly: P3, _arrowOffset: P4): R;
    _newMinimalAppearancePathInBounds_anchorEdge_arrowPosition_topCapOnly_arrowOffset<R = CGPath, P0 = CGRect, P1 = number, P2 = number, P3 = boolean, P4 = number>(__newMinimalAppearancePathInBounds: P0, _anchorEdge: P1, _arrowPosition: P2, _topCapOnly: P3, _arrowOffset: P4): R;
    _setHasDragWindowAppearance<R = void, P0 = boolean>(__setHasDragWindowAppearance: P0): R;
    _hasDragWindowAppearance<R = boolean>(): R;
    _arrowRect<R = CGRect>(): R;
    _addTitlebarAnimated_completionHandler<R = void, P0 = boolean, P1 = CDUnknownBlockType>(__addTitlebarAnimated: P0, _completionHandler: P1): R;
    _removeTitlebarAnimated_completionHandler<R = void, P0 = boolean, P1 = CDUnknownBlockType>(__removeTitlebarAnimated: P0, _completionHandler: P1): R;
    _metricsForPopoverFrame<R = unknown>(): R;
    _tileAndRedisplay_updateContentView<R = void, P0 = boolean, P1 = boolean>(__tileAndRedisplay: P0, _updateContentView: P1): R;
    contentRectForFrameRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_contentRectForFrameRect: P0, _styleMask: P1): R;
    frameRectForContentRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_frameRectForContentRect: P0, _styleMask: P1): R;
    _setDragImage<R = void, P0 = unknown>(__setDragImage: P0): R;
    _dragImage<R = unknown>(): R;
    _setAnchorPoint_reshape<R = void, P0 = CGPoint, P1 = boolean>(__setAnchorPoint: P0, _reshape: P1): R;
    effectiveAnchorEdge<R = number>(): R;
    initWithFrame_styleMask_owner<R = unknown, P0 = CGRect, P1 = number, P2 = unknown>(_initWithFrame: P0, _styleMask: P1, _owner: P2): R;
    _commonPopoverInit<R = void>(): R;
    rangeOfInterest2<R = NSFloatRange>(): R;
    setRangeOfInterest2<R = void, P0 = NSFloatRange>(_v: P0): R;
    rangeOfInterest1<R = NSFloatRange>(): R;
    setRangeOfInterest1<R = void, P0 = NSFloatRange>(_v: P0): R;
    _wantsDragWindowAppearance<R = boolean>(): R;
    set_wantsDragWindowAppearance<R = void, P0 = boolean>(_v: P0): R;
    shouldBlurBackground<R = boolean>(): R;
    setShouldBlurBackground<R = void, P0 = boolean>(_v: P0): R;
    shouldInsetForAnchor<R = boolean>(): R;
    setShouldInsetForAnchor<R = void, P0 = boolean>(_v: P0): R;
    anchorPoint<R = CGPoint>(): R;
    setAnchorPoint<R = void, P0 = CGPoint>(_v: P0): R;
    contentInset<R = NSEdgeInsets>(): R;
    setContentInset<R = void, P0 = NSEdgeInsets>(_v: P0): R;
    anchorSize<R = CGSize>(): R;
    setAnchorSize<R = void, P0 = CGSize>(_v: P0): R;
    anchorEdge<R = number>(): R;
    setAnchorEdge<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSPopoverFrame {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSVisualEffectView {
      alloc<R = NSPopoverFrame>(): R;
      new: <R = NSPopoverFrame>() => R;
      contentRectForFrameRect_appearance_anchorSize_contentInset_hasTitlebar<R = CGRect, P0 = CGRect, P1 = unknown, P2 = CGSize, P3 = NSEdgeInsets, P4 = boolean>(_contentRectForFrameRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3, _hasTitlebar: P4): R;
      frameRectForContentRect_appearance_anchorSize_contentInset_hasTitlebar<R = CGRect, P0 = CGRect, P1 = unknown, P2 = CGSize, P3 = NSEdgeInsets, P4 = boolean>(_frameRectForContentRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3, _hasTitlebar: P4): R;
      contentRectForFrameRect_appearance_anchorSize_contentInset<R = CGRect, P0 = CGRect, P1 = unknown, P2 = CGSize, P3 = NSEdgeInsets>(_contentRectForFrameRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3): R;
      frameRectForContentRect_appearance_anchorSize_contentInset<R = CGRect, P0 = CGRect, P1 = unknown, P2 = CGSize, P3 = NSEdgeInsets>(_frameRectForContentRect: P0, _appearance: P1, _anchorSize: P2, _contentInset: P3): R;
      minFrameSizeForMinContentSize_styleMask<R = CGSize, P0 = CGSize, P1 = number>(_minFrameSizeForMinContentSize: P0, _styleMask: P1): R;
      automaticallyNotifiesObserversOfAnchorPoint<R = boolean>(): R;
    }
  }
}

declare const NSPopoverFrame: cocoa.NSPopoverFrame.CLASS;
