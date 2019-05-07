/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyledLayer<T0 = void, T1 = void, T2 = void> extends _MSStyledLayer, MSStyledLayerProtocol {
    hasMarkers<R = boolean>(): R;
    usedStyle<R = unknown>(): R;
    hasEnabledBackgroundBlur<R = boolean>(): R;
    multiplyBy<R = void, P0 = number>(_multiplyBy: P0): R;
    applyPropertiesToBezier<R = void, P0 = unknown>(_applyPropertiesToBezier: P0): R;
    layerStyleDidChange<R = void>(): R;
    sharedObject<R = unknown>(): R;
    adjustAfterInsert<R = void>(): R;
    stylesForColorAdjustingWithPreferredName<R = unknown, P0 = unknown>(_stylesForColorAdjustingWithPreferredName: P0): R;
    applyScreenPickerColor_preferredStyleName<R = void, P0 = unknown, P1 = unknown>(_applyScreenPickerColor: P0, _preferredStyleName: P1): R;
    prepareAsMask<R = void>(): R;
    outlineShapeFromPath_withBorder<R = unknown, P0 = unknown, P1 = unknown>(_outlineShapeFromPath: P0, _withBorder: P1): R;
    canConvertToOutlines<R = boolean>(): R;
    layersByConvertingToOutlines<R = unknown>(): R;
    sharedMaster<R = MSModelObject>(): R;
    shareableObjectType<R = number>(): R;
    changeColor<R = void, P0 = unknown>(_changeColor: P0): R;
    canCutSegments<R = boolean>(): R;
    layerWithBezierSegmentCutAtIndex<R = unknown, P0 = number>(_layerWithBezierSegmentCutAtIndex: P0): R;
    possiblyFixRectangleBorderBeforeCut<R = void>(): R;
    previewShouldIndicateSharedStyle<R = boolean>(): R;
    foreignSharedStyles<R = unknown>(): R;
    localSharedStyles<R = unknown>(): R;
    styleContainer<R = unknown>(): R;
    updateSharedStyleToMatchSelf<R = void>(): R;
    createSharedStyleWithName<R = unknown, P0 = unknown>(_createSharedStyleWithName: P0): R;
    resetSharedStyle<R = void>(): R;
    applyOverrides_document<R = void, P0 = unknown, P1 = unknown>(_applyOverrides: P0, _document: P1): R;
    applyOverride_document<R = void, P0 = unknown, P1 = unknown>(_applyOverride: P0, _document: P1): R;
    copiedStyleAttributesForLayer<R = unknown, P0 = unknown>(_copiedStyleAttributesForLayer: P0): R;
    writeStyleToPasteboard<R = void, P0 = unknown>(_writeStyleToPasteboard: P0): R;
    copyStyleToPasteboard<R = void, P0 = unknown>(_copyStyleToPasteboard: P0): R;
    sharedStylesReferencedInDocument<R = unknown, P0 = unknown>(_sharedStylesReferencedInDocument: P0): R;
    CSSAttributes<R = unknown>(): R;
    setupWithLayerBuilderDictionary<R = unknown, P0 = unknown>(_setupWithLayerBuilderDictionary: P0): R;
    sharedStyle<R = MSSharedStyle>(): R;
    setSharedStyle<R = void, P0 = MSSharedStyle>(_v: P0): R;
    isSharedStyleOutOfSync<R = boolean>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
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
    // + MSStyledLayer(AdjustAfterInsert): 
    adjustAfterInsert<R = void>(): R;
    // + MSStyledLayer(LayerList): 
    previewShouldIndicateSharedStyle<R = boolean>(): R;
    // + MSStyledLayer(MSFillAndBorderColorScreenPicker): 
    stylesForColorAdjustingWithPreferredName<R = unknown, P0 = unknown>(_stylesForColorAdjustingWithPreferredName: P0): R;
    applyScreenPickerColor_preferredStyleName<R = void, P0 = unknown, P1 = unknown>(_applyScreenPickerColor: P0, _preferredStyleName: P1): R;
    // + MSStyledLayer(MaskWithShape): 
    prepareAsMask<R = void>(): R;
    // + MSStyledLayer(Outlines): 
    outlineShapeFromPath_withBorder<R = unknown, P0 = unknown, P1 = unknown>(_outlineShapeFromPath: P0, _withBorder: P1): R;
    canConvertToOutlines<R = boolean>(): R;
    layersByConvertingToOutlines<R = unknown>(): R;
    // + MSStyledLayer(Scissors): 
    canCutSegments<R = boolean>(): R;
    layerWithBezierSegmentCutAtIndex<R = unknown, P0 = number>(_layerWithBezierSegmentCutAtIndex: P0): R;
    possiblyFixRectangleBorderBeforeCut<R = void>(): R;
    // + MSStyledLayer(ShareableObject): 
    sharedMaster<R = MSModelObject>(): R;
    shareableObjectType<R = number>(): R;
    // + MSStyledLayer(UISupport): 
    changeColor<R = void, P0 = unknown>(_changeColor: P0): R;
  }
  namespace MSStyledLayer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStyledLayer, MSStyledLayerProtocol {
      alloc<R = MSStyledLayer>(): R;
      new: <R = MSStyledLayer>() => R;
      layerWithImage<R = unknown, P0 = unknown>(_layerWithImage: P0): R;
      layerWithImageFromFileURL<R = unknown, P0 = unknown>(_layerWithImageFromFileURL: P0): R;
      layerWithImageFromPasteboard<R = unknown, P0 = unknown>(_layerWithImageFromPasteboard: P0): R;
      pasteExportOptions_onLayers<R = void, P0 = unknown, P1 = unknown>(_pasteExportOptions: P0, _onLayers: P1): R;
      pasteTextStyle_onLayers_document<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_pasteTextStyle: P0, _onLayers: P1, _document: P2): R;
      pasteStyleDict_onLayers_document<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_pasteStyleDict: P0, _onLayers: P1, _document: P2): R;
      pasteStyleFromPasteboard_onLayers_document<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_pasteStyleFromPasteboard: P0, _onLayers: P1, _document: P2): R;
      pasteStyleFromPasteboardOnLayers_document<R = void, P0 = unknown, P1 = unknown>(_pasteStyleFromPasteboardOnLayers: P0, _document: P1): R;
      supportedPasteboardTypesForStyleCopying<R = unknown>(): R;
      // + MSStyledLayer(Image): 
      layerWithImage<R = unknown, P0 = unknown>(_layerWithImage: P0): R;
      layerWithImageFromFileURL<R = unknown, P0 = unknown>(_layerWithImageFromFileURL: P0): R;
      layerWithImageFromPasteboard<R = unknown, P0 = unknown>(_layerWithImageFromPasteboard: P0): R;
    }
  }
}

declare const MSStyledLayer: cocoa.MSStyledLayer.CLASS;
