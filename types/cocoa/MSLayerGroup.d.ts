/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerGroup<T = any> extends cocoa._MSLayerGroup, cocoa.MSLayerGroupProtocol {
    candidatesForMasking<R = unknown>(): R;
    layerDidEndResize<R = void>(): R;
    layerWillStartResize<R = void>(): R;
    resizeChildrenWithOldSize<R = void, P0 = cocoa.CGSize>(_resizeChildrenWithOldSize: P0): R;
    calculateMinimumSize<R = cocoa.CGSize>(): R;
    disableAutomaticScalingInBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_disableAutomaticScalingInBlock: P0): R;
    insertLayer_afterLayerOrAtEnd<R = void, P0 = unknown, P1 = unknown>(_insertLayer: P0, _afterLayerOrAtEnd: P1): R;
    resizeToFitChildrenWithOption<R = boolean, P0 = number>(_resizeToFitChildrenWithOption: P0): R;
    requiredRect<R = cocoa.CGRect>(): R;
    isOpenForSelectionWithOptions<R = boolean, P0 = number>(_isOpenForSelectionWithOptions: P0): R;
    isSelectableOnCanvasWithOptions<R = boolean, P0 = number>(_isSelectableOnCanvasWithOptions: P0): R;
    containsSelectedItemIncludingSelf<R = boolean, P0 = boolean>(_containsSelectedItemIncludingSelf: P0): R;
    isExpanded<R = boolean>(): R;
    deselectLayerAndParent<R = void>(): R;
    moveInLayerTreeInBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_moveInLayerTreeInBlock: P0): R;
    shouldStripShadowsAndInnerShadow<R = boolean>(): R;
    setStyle<R = void, P0 = unknown>(_setStyle: P0): R;
    canContainLayer<R = boolean, P0 = unknown>(_canContainLayer: P0): R;
    defaultStyle<R = unknown>(): R;
    shouldRefreshOverlayForFlows<R = boolean>(): R;
    handleDoubleClick<R = boolean>(): R;
    inspectorSections<R = unknown>(): R;
    prepareAsMaskContainer<R = void>(): R;
    interfaceImageIdentifier<R = unknown>(): R;
    pathForHoverInBounds<R = unknown>(): R;
    styleForBooleanOperation<R = unknown>(): R;
    expandableInLayerList<R = boolean>(): R;
    enumerateLayersAvoidingFaultingWithOptions_passingTest_usingBlock<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_enumerateLayersAvoidingFaultingWithOptions: P0, _passingTest: P1, _usingBlock: P2): R;
    applyTransformsToLayers<R = void, P0 = unknown>(_applyTransformsToLayers: P0): R;
    ungroupReturningNextUngroupGroup<R = unknown>(): R;
    hasStyleOrTransform<R = boolean>(): R;
    translateChildrenFrameToLayers<R = void, P0 = unknown>(_translateChildrenFrameToLayers: P0): R;
    moveLayersToParent<R = unknown>(): R;
    ungroupSingleChildDescendentGroups<R = void>(): R;
    ungroup<R = unknown>(): R;
    CSSAttributeString<R = unknown>(): R;
    disableAutomaticScalingCounter<R = number>(): R;
    setDisableAutomaticScalingCounter<R = void, P0 = number>(_v: P0): R;
    preCalculatedHasSelectedLayer<R = number>(): R;
    setPreCalculatedHasSelectedLayer<R = void, P0 = number>(_v: P0): R;
    isAutomaticScalingEnabled<R = boolean>(): R;
    layers<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSLayerGroup<T = any> extends cocoa.classes._MSLayerGroup, cocoa.classes.MSLayerGroupProtocol {
      alloc<R = MSLayerGroup>(): R;
      new: <R = MSLayerGroup>() => R;
      groupBoundsShouldBeIntegral<R = boolean>(): R;
      groupBoundsForContainer<R = cocoa.CGRect, P0 = unknown>(_groupBoundsForContainer: P0): R;
      groupWithLayers<R = unknown, P0 = unknown>(_groupWithLayers: P0): R;
      groupWithLayer<R = unknown, P0 = unknown>(_groupWithLayer: P0): R;
    }
  }
}

declare const MSLayerGroup: cocoa.classes.MSLayerGroup;
