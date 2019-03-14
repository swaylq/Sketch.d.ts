/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScroller<T0 = void, T1 = void, T2 = void> extends NSControl, NSScrollerImpDelegateProtocol {
    _drawingRectForPart<R = CGRect, P0 = number>(__drawingRectForPart: P0): R;
    _setThumbingKnobProportion<R = void, P0 = number>(__setThumbingKnobProportion: P0): R;
    _thumbingKnobProportion<R = number>(): R;
    _setThumbingDoubleValue<R = void, P0 = number>(__setThumbingDoubleValue: P0): R;
    _thumbingDoubleValue<R = number>(): R;
    _scrollByDelta<R = void, P0 = number>(__scrollByDelta: P0): R;
    _incrementPage<R = void, P0 = unknown>(__incrementPage: P0): R;
    _decrementPage<R = void, P0 = unknown>(__decrementPage: P0): R;
    _incrementLine<R = void, P0 = unknown>(__incrementLine: P0): R;
    _decrementLine<R = void, P0 = unknown>(__decrementLine: P0): R;
    setUsePresentationValue<R = void, P0 = boolean>(_setUsePresentationValue: P0): R;
    setPresentationValue<R = void, P0 = number>(_setPresentationValue: P0): R;
    overlayScrollerTrackAlpha<R = number>(): R;
    overlayScrollerKnobAlpha<R = number>(): R;
    _overlayScrollerState<R = number>(): R;
    scrollerImp<R = unknown>(): R;
    _orientation<R = number>(): R;
    _setIsHorizontal<R = void, P0 = boolean>(__setIsHorizontal: P0): R;
    _setNeedsDisplayIfNotLayerBackedOverlayCompatibleInRect<R = void, P0 = CGRect>(__setNeedsDisplayIfNotLayerBackedOverlayCompatibleInRect: P0): R;
    _setNeedsDisplayIfNotLayerBackedOverlayCompatible<R = void>(): R;
    _setOverlayScrollerState_forceImmediately<R = void, P0 = number, P1 = boolean>(__setOverlayScrollerState: P0, _forceImmediately: P1): R;
    _setAvoidingOtherScrollerThumb<R = void, P0 = boolean>(__setAvoidingOtherScrollerThumb: P0): R;
    _expansionTransitionProgress<R = number>(): R;
    setExpansionTransitionProgress<R = void, P0 = number>(_setExpansionTransitionProgress: P0): R;
    _uiStateTransitionProgress<R = number>(): R;
    setUiStateTransitionProgress<R = void, P0 = number>(_setUiStateTransitionProgress: P0): R;
    setOverlayScrollerTrackAlpha<R = void, P0 = number>(_setOverlayScrollerTrackAlpha: P0): R;
    setOverlayScrollerKnobAlpha<R = void, P0 = number>(_setOverlayScrollerKnobAlpha: P0): R;
    layer_shouldInheritContentsScale_fromWindow<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_layer: P0, _shouldInheritContentsScale: P1, _fromWindow: P2): R;
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    _setTrackingInKnob<R = void, P0 = boolean>(__setTrackingInKnob: P0): R;
    _isTrackingInKnob<R = boolean>(): R;
    _fixScrollerImpForSwizzlers<R = boolean>(): R;
    _replaceScrollerImp<R = void>(): R;
    _setLionScrollerStyle<R = void, P0 = number>(__setLionScrollerStyle: P0): R;
    _lionScrollerStyle<R = number>(): R;
    setDoubleValue<R = void, P0 = number>(_setDoubleValue: P0): R;
    setFloatValue<R = void, P0 = number>(_setFloatValue: P0): R;
    setFloatValue_knobProportion<R = void, P0 = number, P1 = number>(_setFloatValue: P0, _knobProportion: P1): R;
    doubleValue<R = number>(): R;
    floatValue<R = number>(): R;
    _windowResizeMouseLocationIsInVisibleScrollerThumb<R = boolean, P0 = CGPoint>(__windowResizeMouseLocationIsInVisibleScrollerThumb: P0): R;
    trackPagingArea<R = void, P0 = unknown>(_trackPagingArea: P0): R;
    trackScrollButtons<R = void, P0 = unknown>(_trackScrollButtons: P0): R;
    trackKnob<R = void, P0 = unknown>(_trackKnob: P0): R;
    _postScrollerDidEndTrackingNotification<R = void>(): R;
    _postScrollerDidBeginTrackingNotification<R = void>(): R;
    testPart<R = number, P0 = CGPoint>(_testPart: P0): R;
    _testPartUsingDestinationFloatValue<R = number, P0 = CGPoint>(__testPartUsingDestinationFloatValue: P0): R;
    highlight<R = void, P0 = boolean>(_highlight: P0): R;
    _compositeScrollerPart_inRect_withAlpha_drawHandler<R = void, P0 = number, P1 = CGRect, P2 = number, P3 = CDUnknownBlockType>(__compositeScrollerPart: P0, _inRect: P1, _withAlpha: P2, _drawHandler: P3): R;
    drawKnobSlotInRect_highlight<R = void, P0 = CGRect, P1 = boolean>(_drawKnobSlotInRect: P0, _highlight: P1): R;
    drawKnob<R = void>(): R;
    drawArrow_highlight<R = void, P0 = number, P1 = boolean>(_drawArrow: P0, _highlight: P1): R;
    drawArrow_highlightPart<R = void, P0 = number, P1 = number>(_drawArrow: P0, _highlightPart: P1): R;
    _old_drawArrow_highlightPart<R = void, P0 = number, P1 = number>(__old_drawArrow: P0, _highlightPart: P1): R;
    effectiveAppearance<R = unknown>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    controlTint<R = number>(): R;
    setControlTint<R = void, P0 = number>(_setControlTint: P0): R;
    arrowsPosition<R = number>(): R;
    setArrowsPosition<R = void, P0 = number>(_setArrowsPosition: P0): R;
    setAction<R = void, P0 = string>(_setAction: P0): R;
    setTarget<R = void, P0 = unknown>(_setTarget: P0): R;
    checkSpaceForParts<R = void>(): R;
    rectForPart<R = CGRect, P0 = number>(_rectForPart: P0): R;
    drawParts<R = void>(): R;
    _really_setLionScrollerStyle<R = void, P0 = number>(__really_setLionScrollerStyle: P0): R;
    wantsLayer<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    _routeAroundScrollerStyleAccessors<R = boolean>(): R;
    _repeatTime<R = number>(): R;
    _automateLiveScroll<R = void>(): R;
    _accessibilityUIElementForPartCode<R = unknown, P0 = number>(__accessibilityUIElementForPartCode: P0): R;
    _accessibilityIsSupportedPartCode<R = boolean, P0 = number>(__accessibilityIsSupportedPartCode: P0): R;
    _accessibilitySupportedPartCodes<R = number>(): R;
    accessibilitySetHiddenAttribute<R = void, P0 = unknown>(_accessibilitySetHiddenAttribute: P0): R;
    accessibilityIsHiddenAttributeSettable<R = boolean>(): R;
    accessibilityHiddenAttribute<R = unknown>(): R;
    _accessibilityScrollView<R = unknown>(): R;
    accessibilityIsOrientationAttributeSettable<R = boolean>(): R;
    accessibilityOrientationAttribute<R = unknown>(): R;
    accessibilitySetValueAttribute<R = void, P0 = unknown>(_accessibilitySetValueAttribute: P0): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    knobProportion<R = number>(): R;
    setKnobProportion<R = void, P0 = number>(_v: P0): R;
    hitPart<R = number>(): R;
    controlSize<R = number>(): R;
    setControlSize<R = void, P0 = number>(_v: P0): R;
    usableParts<R = number>(): R;
    knobStyle<R = number>(): R;
    setKnobStyle<R = void, P0 = number>(_v: P0): R;
    scrollerStyle<R = number>(): R;
    setScrollerStyle<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSScroller {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSScrollerImpDelegateProtocol {
      alloc<R = NSScroller>(): R;
      new: <R = NSScroller>() => R;
      scrollerSubclassIsCompatibleWithOverlayScrollers<R = boolean>(): R;
      _setArrowsConfig<R = void, P0 = number>(__setArrowsConfig: P0): R;
      _arrowsConfig<R = number>(): R;
      preferredScrollerStyle<R = number>(): R;
      scrollerWidth<R = number>(): R;
      scrollerWidthForControlSize<R = number, P0 = number>(_scrollerWidthForControlSize: P0): R;
      scrollerWidthForControlSize_scrollerStyle<R = number, P0 = number, P1 = number>(_scrollerWidthForControlSize: P0, _scrollerStyle: P1): R;
      _aquaScrollerVariantChanged<R = void, P0 = unknown>(__aquaScrollerVariantChanged: P0): R;
      isCompatibleWithOverlayScrollers<R = boolean>(): R;
      _aquaScrollerBehaviorChanged<R = void, P0 = unknown>(__aquaScrollerBehaviorChanged: P0): R;
      clickBehavior<R = number>(): R;
    }
  }
}

declare const NSScroller: cocoa.NSScroller.CLASS;
