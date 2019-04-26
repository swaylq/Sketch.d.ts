/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeGroup<T0 = void, T1 = void, T2 = void> extends _MSShapeGroup, MSLayerPreviewabilityProtocol, MSShapeGroupProtocol, MSPathLayerProtocol {
    canRotate<R = boolean>(): R;
    isVerticalLine<R = boolean>(): R;
    isHorizontalLine<R = boolean>(): R;
    hasLines<R = boolean>(): R;
    moveTransformsToChildren<R = void>(): R;
    flatten<R = unknown>(): R;
    safeFrameForBezierPath<R = CGRect, P0 = unknown>(_safeFrameForBezierPath: P0): R;
    shouldDrawSelectionStroke<R = boolean>(): R;
    canSmartRotate<R = boolean>(): R;
    isStraightTriangle<R = boolean>(): R;
    shouldFlattenAfterRotate<R = boolean>(): R;
    handlerClass<R = unknown>(): R;
    supportsInnerOuterBorders<R = boolean>(): R;
    changeInnerOuterBordersIfHasOpenPaths<R = void>(): R;
    cacheOwner<R = unknown>(): R;
    canFlatten<R = boolean>(): R;
    canProbablyFlatten<R = boolean>(): R;
    hasFlattenablePath<R = boolean>(): R;
    hasBooleanOperations<R = boolean>(): R;
    shouldHitTestOnFill<R = boolean, P0 = unknown>(_shouldHitTestOnFill: P0): R;
    hitTestAsPath<R = boolean>(): R;
    isPartOfClippingMask<R = boolean>(): R;
    isClosed<R = boolean>(): R;
    setIsClosed<R = void, P0 = boolean>(_v: P0): R;
    edited<R = boolean>(): R;
    setEdited<R = void, P0 = boolean>(_v: P0): R;
    pathInFrame<R = MSPath>(): R;
    setPathInFrame<R = void, P0 = MSPath>(_v: P0): R;
    hasMarkers<R = boolean>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
    badgeType<R = number>(): R;
    bounds<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hasTransforms<R = boolean>(): R;
    hash<R = number>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = BCEdgePaddings>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isFlippedVertical<R = boolean>(): R;
    isLayerExportable<R = boolean>(): R;
    isVisible<R = boolean>(): R;
    objectID<R = NSString>(): R;
    origin<R = CGPoint>(): R;
    rect<R = CGRect>(): R;
    rotation<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSShapeGroup(Editing): 
    handlerClass<R = unknown>(): R;
    handleDoubleClick<R = boolean>(): R;
    // + MSShapeGroup(Flattening): 
    canFlatten<R = boolean>(): R;
    canProbablyFlatten<R = boolean>(): R;
    hasFlattenablePath<R = boolean>(): R;
    hasBooleanOperations<R = boolean>(): R;
    // + MSShapeGroup(Hover): 
    pathForHoverInBounds<R = unknown>(): R;
    // + MSShapeGroup(InspectorSections): 
    inspectorSections<R = unknown>(): R;
    // + MSShapeGroup(InterfaceImageOwner): 
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    // + MSShapeGroup(Preview): 
    unselectedPreviewTemplateImage<R = unknown>(): R;
    selectedPreviewTemplateImage<R = unknown>(): R;
    // + MSShapeGroup(ShouldDrawSelection): 
    shouldDrawSelectionStroke<R = boolean>(): R;
    // + MSShapeGroup(ShouldFlattenAfterRotate): 
    isStraightTriangle<R = boolean>(): R;
    shouldFlattenAfterRotate<R = boolean>(): R;
    // + MSShapeGroup(SmartRotate): 
    canSmartRotate<R = boolean>(): R;
    // + MSShapeGroup(StyleForBoolean): 
    styleForBooleanOperation<R = unknown>(): R;
    // + MSShapeGroup(UISupport): 
    supportsInnerOuterBorders<R = boolean>(): R;
    changeInnerOuterBordersIfHasOpenPaths<R = void>(): R;
    // + MSShapeGroup(Preview):
    badgeType<R = number>(): R;
  }
  namespace MSShapeGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSShapeGroup, MSLayerPreviewabilityProtocol, MSShapeGroupProtocol, MSPathLayerProtocol {
      alloc<R = MSShapeGroup>(): R;
      new: <R = MSShapeGroup>() => R;
      shapeWithRect<R = unknown, P0 = CGRect>(_shapeWithRect: P0): R;
      applyStyleForBooleanOperationFrom_toShapeGroup<R = void, P0 = unknown, P1 = unknown>(_applyStyleForBooleanOperationFrom: P0, _toShapeGroup: P1): R;
      shapeWithBooleanOperation_onLayers<R = unknown, P0 = number, P1 = unknown>(_shapeWithBooleanOperation: P0, _onLayers: P1): R;
      // + MSShapeGroup(ShapeWithBoolean): 
      applyStyleForBooleanOperationFrom_toShapeGroup<R = void, P0 = unknown, P1 = unknown>(_applyStyleForBooleanOperationFrom: P0, _toShapeGroup: P1): R;
      shapeWithBooleanOperation_onLayers<R = unknown, P0 = number, P1 = unknown>(_shapeWithBooleanOperation: P0, _onLayers: P1): R;
    }
  }
}

declare const MSShapeGroup: cocoa.MSShapeGroup.CLASS;
