/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardGroup<T0 = void, T1 = void, T2 = void> extends _MSArtboardGroup, MSArtboardGroupProtocol, MSRootLayerProtocol, MSLayerWithMutableBackgroundColorProtocol, MSColorConvertibleProtocol {
    setShouldBreakMaskChain<R = void, P0 = boolean>(_setShouldBreakMaskChain: P0): R;
    closestClippingLayer<R = unknown>(): R;
    rootForNameUniquing<R = unknown>(): R;
    moveChildrenToIdenticalPositionAfterResizeFromRect<R = void, P0 = CGRect>(_moveChildrenToIdenticalPositionAfterResizeFromRect: P0): R;
    layerDidResizeFromRect_corner<R = void, P0 = CGRect, P1 = number>(_layerDidResizeFromRect: P0, _corner: P1): R;
    canRotate<R = boolean>(): R;
    otherArtboardUnderArtboard<R = unknown>(): R;
    moveBySuggestedOffset<R = void, P0 = CGVector>(_moveBySuggestedOffset: P0): R;
    setRect<R = void, P0 = CGRect>(_setRect: P0): R;
    parentRoot<R = unknown>(): R;
    parentArtboard<R = unknown>(): R;
    refreshOverlayWithAbsoluteMargins<R = void, P0 = CGSize>(_refreshOverlayWithAbsoluteMargins: P0): R;
    rulerCoordinateSpace<R = unknown>(): R;
    constrainProportions<R = boolean>(): R;
    isLocked<R = boolean>(): R;
    setIsLocked<R = void, P0 = boolean>(_setIsLocked: P0): R;
    isOpen<R = boolean>(): R;
    canBeTransformed<R = boolean>(): R;
    isAutomaticScalingEnabled<R = boolean>(): R;
    hasClickThrough<R = boolean>(): R;
    hitTestInNameLabel_zoomValue<R = boolean, P0 = CGPoint, P1 = number>(_hitTestInNameLabel: P0, _zoomValue: P1): R;
    setIsVisible<R = void, P0 = boolean>(_setIsVisible: P0): R;
    defaultArtboardStyle<R = unknown>(): R;
    canBeHidden<R = boolean>(): R;
    canChangeBooleanOperation<R = boolean>(): R;
    badgeImages<R = unknown>(): R;
    displayType<R = number>(): R;
    optimalBoundingBox<R = CGRect>(): R;
    parentForInsertingLayers<R = unknown>(): R;
    displayName<R = unknown>(): R;
    shouldResizeToFitRect<R = boolean, P0 = CGRect>(_shouldResizeToFitRect: P0): R;
    resizeToFitChildren<R = void>(): R;
    selectionHitTest_options_zoomValue<R = unknown, P0 = CGPoint, P1 = number, P2 = number>(_selectionHitTest: P0, _options: P1, _zoomValue: P2): R;
    parentRootForAbsoluteRect<R = unknown>(): R;
    contentBounds<R = CGRect>(): R;
    preset<R = MSArtboardPreset>(): R;
    setPreset<R = void, P0 = MSArtboardPreset>(_v: P0): R;
    rulerBase<R = CGPoint>(): R;
    setRulerBase<R = void, P0 = CGPoint>(_v: P0): R;
    rotation<R = number>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
    backgroundColor<R = MSColor>(): R;
    setBackgroundColor<R = void, P0 = MSColor>(_v: P0): R;
    bounds<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    grid<R = MSSimpleGrid>(): R;
    setGrid<R = void, P0 = MSSimpleGrid>(_v: P0): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    horizontalRulerData<R = MSRulerData>(): R;
    setHorizontalRulerData<R = void, P0 = MSRulerData>(_v: P0): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = BCEdgePaddings>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    layout<R = MSLayoutGrid>(): R;
    setLayout<R = void, P0 = MSLayoutGrid>(_v: P0): R;
    objectID<R = NSString>(): R;
    origin<R = CGPoint>(): R;
    rect<R = CGRect>(): R;
    superclass<R = unknown>(): R;
    verticalRulerData<R = MSRulerData>(): R;
    setVerticalRulerData<R = void, P0 = MSRulerData>(_v: P0): R;
    // + MSArtboardGroup(AdjustAfterInsert): 
    adjustAfterInsert<R = void>(): R;
    // + MSArtboardGroup(CanChangeBooleanOperation): 
    canChangeBooleanOperation<R = boolean>(): R;
    // + MSArtboardGroup(Flow): 
    shouldRefreshOverlayForFlows<R = boolean>(): R;
    // + MSArtboardGroup(Hiding): 
    canBeHidden<R = boolean>(): R;
    // + MSArtboardGroup(InspectorSections): 
    inspectorSections<R = unknown>(): R;
    // + MSArtboardGroup(LayerList): 
    canCopyToLayer_beforeLayer<R = boolean, P0 = unknown, P1 = unknown>(_canCopyToLayer: P0, _beforeLayer: P1): R;
    contextualMenuPreviewTemplateImage<R = unknown>(): R;
    unselectedPreviewTemplateImage<R = unknown>(): R;
    selectedPreviewTemplateImage<R = unknown>(): R;
    badgeImages<R = unknown>(): R;
    displayType<R = number>(): R;
    // + MSArtboardGroup(MSFillAndBorderColorScreenPicker): 
    applyScreenPickerColor_preferredStyleName<R = void, P0 = unknown, P1 = unknown>(_applyScreenPickerColor: P0, _preferredStyleName: P1): R;
    // + MSArtboardGroup(OptimalSize): 
    optimalBoundingBox<R = CGRect>(): R;
    // + MSArtboardGroup(UISupport): 
    parentForInsertingLayers<R = unknown>(): R;
    displayName<R = unknown>(): R;
  }
  namespace MSArtboardGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSArtboardGroup, MSArtboardGroupProtocol, MSRootLayerProtocol, MSLayerWithMutableBackgroundColorProtocol, MSColorConvertibleProtocol {
      alloc<R = MSArtboardGroup>(): R;
      new: <R = MSArtboardGroup>() => R;
      artboardRectFromLayersInArray<R = CGRect, P0 = unknown>(_artboardRectFromLayersInArray: P0): R;
      // + MSArtboardGroup(Inspector): 
      artboardRectFromLayersInArray<R = CGRect, P0 = unknown>(_artboardRectFromLayersInArray: P0): R;
    }
  }
}

declare const MSArtboardGroup: cocoa.MSArtboardGroup.CLASS;
