/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLayer<T0 = void, T1 = void, T2 = void> extends _MSTextLayer, MSFirstLineTypesetterDelegateProtocol, MSColorConvertibleProtocol {
    canLockProportions<R = boolean>(): R;
    canScale<R = boolean>(): R;
    canBeTransformed<R = boolean>(): R;
    constrainProportions<R = boolean>(): R;
    checkTextBehaviourAndClippingAfterResizeFromCorner_mayClip<R = void, P0 = number, P1 = boolean>(_checkTextBehaviourAndClippingAfterResizeFromCorner: P0, _mayClip: P1): R;
    resizeWithOldGroupSize<R = void, P0 = CGSize>(_resizeWithOldGroupSize: P0): R;
    layerDidResizeFromRect_corner<R = void, P0 = CGRect, P1 = number>(_layerDidResizeFromRect: P0, _corner: P1): R;
    replaceTextPreservingAttributeRanges<R = void, P0 = unknown>(_replaceTextPreservingAttributeRanges: P0): R;
    setTextTransform_range<R = void, P0 = number, P1 = _NSRange>(_setTextTransform: P0, _range: P1): R;
    makeLowercase<R = void, P0 = unknown>(_makeLowercase: P0): R;
    makeUppercase<R = void, P0 = unknown>(_makeUppercase: P0): R;
    attributeForKey<R = unknown, P0 = unknown>(_attributeForKey: P0): R;
    addAttribute_value<R = void, P0 = unknown, P1 = unknown>(_addAttribute: P0, _value: P1): R;
    addAttributes_forRange<R = void, P0 = unknown, P1 = _NSRange>(_addAttributes: P0, _forRange: P1): R;
    setAttributes_forRange<R = void, P0 = unknown, P1 = _NSRange>(_setAttributes: P0, _forRange: P1): R;
    addAttribute_value_forRange<R = void, P0 = unknown, P1 = unknown, P2 = _NSRange>(_addAttribute: P0, _value: P1, _forRange: P2): R;
    ignoreDelegateNotificationsInBlock<R = void, P0 = CDUnknownBlockType>(_ignoreDelegateNotificationsInBlock: P0): R;
    updateAttributedStringInBlock<R = void, P0 = CDUnknownBlockType>(_updateAttributedStringInBlock: P0): R;
    setAttributedString<R = void, P0 = unknown>(_setAttributedString: P0): R;
    isEmpty<R = boolean>(): R;
    baseLineHeight<R = number>(): R;
    setFont<R = void, P0 = unknown>(_setFont: P0): R;
    setLeading<R = void, P0 = number>(_setLeading: P0): R;
    leading<R = number>(): R;
    paragraphStyle<R = unknown>(): R;
    setKerning<R = void, P0 = number>(_setKerning: P0): R;
    kerning<R = number>(): R;
    bezierPathFromGlyphsInBounds<R = unknown>(): R;
    drawingPointForText<R = CGPoint>(): R;
    startingPositionOnPath<R = number, P0 = unknown>(_startingPositionOnPath: P0): R;
    defaultLineHeight<R = number, P0 = unknown>(_defaultLineHeight: P0): R;
    font<R = unknown>(): R;
    changeFont<R = void, P0 = unknown>(_changeFont: P0): R;
    selectionCornerMaskWithZoomValue<R = number, P0 = number>(_selectionCornerMaskWithZoomValue: P0): R;
    shapeToUseForTextOnPath<R = unknown>(): R;
    updateNameFromStorage<R = void>(): R;
    changeListType<R = void, P0 = unknown>(_changeListType: P0): R;
    updateStyleInBlock<R = void, P0 = CDUnknownBlockType>(_updateStyleInBlock: P0): R;
    setRectAccountingForClipped<R = void, P0 = CGRect>(_setRectAccountingForClipped: P0): R;
    adjustFrameToFit<R = void>(): R;
    finishEditing<R = void>(): R;
    replaceMissingFontsIfNecessary<R = void>(): R;
    compareAttributes_withAttributes<R = boolean, P0 = unknown, P1 = unknown>(_compareAttributes: P0, _withAttributes: P1): R;
    syncTextStyleAttributes<R = void>(): R;
    setupBehaviour<R = void, P0 = boolean>(_setupBehaviour: P0): R;
    setTextBehaviour<R = void, P0 = number>(_setTextBehaviour: P0): R;
    setTextBehaviour_mayAdjustFrame<R = void, P0 = number, P1 = boolean>(_setTextBehaviour: P0, _mayAdjustFrame: P1): R;
    setStyle<R = void, P0 = unknown>(_setStyle: P0): R;
    initWithFrame_attributes_documentColorSpace_type<R = unknown, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = number>(_initWithFrame: P0, _attributes: P1, _documentColorSpace: P2, _type: P3): R;
    initWithAttributedString_documentColorSpace_maxWidth<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithAttributedString: P0, _documentColorSpace: P1, _maxWidth: P2): R;
    initWithFrame<R = unknown, P0 = CGRect>(_initWithFrame: P0): R;
    PDFPreview<R = unknown>(): R;
    shouldStorePDFPreviews<R = boolean>(): R;
    cornerRectType<R = number>(): R;
    shouldDrawSelectionStroke<R = boolean>(): R;
    shouldDrawSelection<R = boolean>(): R;
    handlerClass<R = unknown>(): R;
    inspectorSections<R = unknown>(): R;
    layerDidResizeFromInspector<R = void, P0 = number>(_layerDidResizeFromInspector: P0): R;
    copyStylePropertiesToShape<R = void, P0 = unknown>(_copyStylePropertiesToShape: P0): R;
    copyTextPropertiesToShape<R = void, P0 = unknown>(_copyTextPropertiesToShape: P0): R;
    enumerateAnchorsForSnappingOnAxes_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateAnchorsForSnappingOnAxes: P0, _usingBlock: P1): R;
    snapItemClass<R = unknown>(): R;
    changeTextColorTo<R = void, P0 = unknown>(_changeTextColorTo: P0): R;
    setTextBehaviourSegmentTag<R = void, P0 = number>(_setTextBehaviourSegmentTag: P0): R;
    textBehaviourLabelString<R = unknown>(): R;
    textBehaviourSegmentTag<R = number>(): R;
    supportsInnerOuterBorders<R = boolean>(): R;
    setSharedStyle<R = void, P0 = unknown>(_setSharedStyle: P0): R;
    reapplyPreviousAttributesFromString<R = void, P0 = unknown>(_reapplyPreviousAttributesFromString: P0): R;
    resizingConstraint<R = number>(): R;
    canFixHeight<R = boolean>(): R;
    invalidateFonts<R = void>(): R;
    replaceFonts<R = void, P0 = unknown>(_replaceFonts: P0): R;
    embedInTransformedGroup<R = void>(): R;
    cornerForBaselineMaintaining<R = number>(): R;
    layoutDirection<R = number>(): R;
    editingDelegate<R = MSTextLayerEditingDelegate>(): R;
    setEditingDelegate<R = void, P0 = MSTextLayerEditingDelegate>(_v: P0): R;
    isEditingText<R = boolean>(): R;
    setIsEditingText<R = void, P0 = boolean>(_v: P0): R;
    previousRectCache<R = CGRect>(): R;
    setPreviousRectCache<R = void, P0 = CGRect>(_v: P0): R;
    stringValue<R = NSString>(): R;
    setStringValue<R = void, P0 = NSString>(_v: P0): R;
    attributedStringValue<R = NSAttributedString>(): R;
    setAttributedStringValue<R = void, P0 = NSAttributedString>(_v: P0): R;
    styleAttributes<R = NSDictionary>(): R;
    setStyleAttributes<R = void, P0 = NSDictionary>(_v: P0): R;
    textColor<R = MSColor>(): R;
    setTextColor<R = void, P0 = MSColor>(_v: P0): R;
    lineHeight<R = number>(): R;
    setLineHeight<R = void, P0 = number>(_v: P0): R;
    characterSpacing<R = NSNumber>(): R;
    setCharacterSpacing<R = void, P0 = NSNumber>(_v: P0): R;
    fontPostscriptName<R = NSString>(): R;
    setFontPostscriptName<R = void, P0 = NSString>(_v: P0): R;
    fontSize<R = number>(): R;
    setFontSize<R = void, P0 = number>(_v: P0): R;
    verticalAlignment<R = number>(): R;
    setVerticalAlignment<R = void, P0 = number>(_v: P0): R;
    textAlignment<R = number>(): R;
    setTextAlignment<R = void, P0 = number>(_v: P0): R;
    supportsVerticalAlignment<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSTextLayer(DotRectType): 
    cornerRectType<R = number>(): R;
    // + MSTextLayer(Editing): 
    handlerClass<R = unknown>(): R;
    // + MSTextLayer(Hover): 
    drawHoverWithZoom_color_cache<R = void, P0 = number, P1 = unknown, P2 = unknown>(_drawHoverWithZoom: P0, _color: P1, _cache: P2): R;
    // + MSTextLayer(InspectorResize): 
    layerDidResizeFromInspector<R = void, P0 = number>(_layerDidResizeFromInspector: P0): R;
    // + MSTextLayer(InspectorSections): 
    inspectorSections<R = unknown>(): R;
    // + MSTextLayer(LayerList): 
    unselectedPreviewTemplateImage<R = unknown>(): R;
    selectedPreviewTemplateImage<R = unknown>(): R;
    // + MSTextLayer(MSFillAndBorderColorScreenPicker): 
    applyScreenPickerColor_preferredStyleName<R = void, P0 = unknown, P1 = unknown>(_applyScreenPickerColor: P0, _preferredStyleName: P1): R;
    // + MSTextLayer(MSSnappable): 
    enumerateAnchorsForSnappingOnAxes_includingCenter_usingBlock<R = void, P0 = number, P1 = boolean, P2 = CDUnknownBlockType>(_enumerateAnchorsForSnappingOnAxes: P0, _includingCenter: P1, _usingBlock: P2): R;
    snapItemClass<R = unknown>(): R;
    // + MSTextLayer(Outlines): 
    copyStylePropertiesToShape_shapeName<R = void, P0 = unknown, P1 = unknown>(_copyStylePropertiesToShape: P0, _shapeName: P1): R;
    copyTextPropertiesToShape_color<R = void, P0 = unknown, P1 = unknown>(_copyTextPropertiesToShape: P0, _color: P1): R;
    canConvertToOutlines<R = boolean>(): R;
    layersByConvertingToOutlines<R = unknown>(): R;
    hasMultipleTextColors<R = boolean>(): R;
    // + MSTextLayer(PDFPreview): 
    PDFPreview<R = unknown>(): R;
    shouldStorePDFPreviews<R = boolean>(): R;
    // + MSTextLayer(ShareableObject): 
    shareableObjectType<R = number>(): R;
    // + MSTextLayer(ShouldDrawSelection): 
    shouldDrawSelectionStroke<R = boolean>(): R;
    shouldDrawSelection<R = boolean>(): R;
    // + MSTextLayer(UISupport): 
    changeTextColorTo<R = void, P0 = unknown>(_changeTextColorTo: P0): R;
    changeColor<R = void, P0 = unknown>(_changeColor: P0): R;
    setTextBehaviourSegmentTag<R = void, P0 = number>(_setTextBehaviourSegmentTag: P0): R;
    textBehaviourLabelString<R = unknown>(): R;
    textBehaviourSegmentTag<R = number>(): R;
    supportsInnerOuterBorders<R = boolean>(): R;
    // + MSTextLayer(UISupport):
    supportsVerticalAlignment<R = boolean>(): R;
  }
  namespace MSTextLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSTextLayer, MSFirstLineTypesetterDelegateProtocol, MSColorConvertibleProtocol {
      alloc<R = MSTextLayer>(): R;
      new: <R = MSTextLayer>() => R;
      defaultValue<R = unknown>(): R;
      menuItemStateForTest_forLayers<R = number, P0 = CDUnknownBlockType, P1 = unknown>(_menuItemStateForTest: P0, _forLayers: P1): R;
      menuItemStateForAlignment_forLayers<R = number, P0 = number, P1 = unknown>(_menuItemStateForAlignment: P0, _forLayers: P1): R;
      setTextAlignment_forLayers<R = void, P0 = number, P1 = unknown>(_setTextAlignment: P0, _forLayers: P1): R;
      canSetTextAlignmentForLayers<R = boolean, P0 = unknown>(_canSetTextAlignmentForLayers: P0): R;
      menuItemStateForTextVerticalAlignment_forLayers<R = number, P0 = number, P1 = unknown>(_menuItemStateForTextVerticalAlignment: P0, _forLayers: P1): R;
      setTextVerticalAlignment_forLayers<R = void, P0 = number, P1 = unknown>(_setTextVerticalAlignment: P0, _forLayers: P1): R;
      canSetTextVerticalAlignmentForLayers<R = boolean, P0 = unknown>(_canSetTextVerticalAlignmentForLayers: P0): R;
      keyPathsForValuesAffectingTextBehaviourLabelString<R = unknown>(): R;
      keyPathsForValuesAffectingTextBehaviourSegmentTag<R = unknown>(): R;
      keyPathsForValuesAffectingSupportsVerticalAlignment<R = unknown>(): R;
      keyPathsForValuesAffectingHasFixedHeight<R = unknown>(): R;
      keyPathsForValuesAffectingCanFixHeight<R = unknown>(): R;
      maintainTextLayerBaselinesForLayers_inBlock<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_maintainTextLayerBaselinesForLayers: P0, _inBlock: P1): R;
      // + MSTextLayer(TextAlignment): 
      menuItemStateForTest_forLayers<R = number, P0 = CDUnknownBlockType, P1 = unknown>(_menuItemStateForTest: P0, _forLayers: P1): R;
      menuItemStateForAlignment_forLayers<R = number, P0 = number, P1 = unknown>(_menuItemStateForAlignment: P0, _forLayers: P1): R;
      setTextAlignment_forLayers<R = void, P0 = number, P1 = unknown>(_setTextAlignment: P0, _forLayers: P1): R;
      canSetTextAlignmentForLayers<R = boolean, P0 = unknown>(_canSetTextAlignmentForLayers: P0): R;
      // + MSTextLayer(UISupport): 
      keyPathsForValuesAffectingTextBehaviourLabelString<R = unknown>(): R;
      keyPathsForValuesAffectingTextBehaviourSegmentTag<R = unknown>(): R;
      keyPathsForValuesAffectingSupportsVerticalAlignment<R = unknown>(): R;
      // + MSTextLayer(VerticalTextAlignment): 
      menuItemStateForTextVerticalAlignment_forLayers<R = number, P0 = number, P1 = unknown>(_menuItemStateForTextVerticalAlignment: P0, _forLayers: P1): R;
      setTextVerticalAlignment_forLayers<R = void, P0 = number, P1 = unknown>(_setTextVerticalAlignment: P0, _forLayers: P1): R;
      canSetTextVerticalAlignmentForLayers<R = boolean, P0 = unknown>(_canSetTextVerticalAlignmentForLayers: P0): R;
    }
  }
}

declare const MSTextLayer: cocoa.MSTextLayer.CLASS;
